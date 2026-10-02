import { AfterViewInit, Component, inject, DOCUMENT, OnInit, PLATFORM_ID, effect, signal } from '@angular/core';
import { defaultIfEmpty } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, Event, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordpressService } from './services/wordpress.service';
import { WPPost } from './interfaces/wordpress';
import { DEFAULT_PORTFOLIO_PROJECTS, PortfolioProjects, WebsiteContent, PortfolioCategory2 } from './interfaces/website-content';
import { HelperService } from './services/helper.service';
import { LoaderComponent } from './elements/loader/loader.component';


declare var jQuery: any;
declare var cursurCircle: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoaderComponent]
})
export class AppComponent implements OnInit, AfterViewInit {
  private router = inject(Router);
  private document = inject<Document>(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  protected readonly loaderComplete = signal(!isPlatformBrowser(this.platformId));
  protected wpService = inject(WordpressService);
  private helperService = inject(HelperService);

  title = 'devsense';

  constructor() { }
  ngOnInit(): void {
    this.wpService.getAllPosts().pipe(defaultIfEmpty([])).subscribe(posts => {
      posts.forEach(post => {
        post.imageUrl = post.featured_media_src_url ?? undefined;
      });
      this.wpService.uncategorizedPosts.set(posts);


      this.helperService.log(this.wpService.uncategorizedPosts(), 'All uncategorized posts:', 'yellow', 'green', 'black');
      this.wpService.getSubcategoriesByCategoryId(3).pipe(defaultIfEmpty([])).subscribe(subcategories => {
        const content = this.wpService.websiteContent();
        subcategories.forEach(subcategory => {
          content[this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent] = { parentCategory: subcategory.id } as WPPost & any;
        });
        this.wpService.websiteContent.set(content);
        // this.assignPostsToWebsiteContent(this.wpService.uncategorizedPosts());
        this.assignSubcategoryPostsToWebsiteContent(subcategories, this.wpService.uncategorizedPosts());
      });
    }
    );
  }
  assignPostsToWebsiteContent(posts: WPPost[]) {
    const content = this.wpService.websiteContent();
    posts.forEach((post: WPPost) => {
      if (post.slug && post.categories[0] === 2) {
        const camelKey = this.helperService.hyphenToCamel(post.slug);
        content[camelKey] = post;
      }
    }
    );
    this.wpService.websiteContent.set(content);
  }
  assignSubcategoryPostsToWebsiteContent(subcategories: any[], posts: WPPost[]) {
    const content = this.wpService.websiteContent();

    subcategories.forEach(subcategory => {
      const camelKey = this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent;
      const entry = content[camelKey] as any;

      if (entry && entry.parentCategory) {
        const parentCategoryId = entry.parentCategory;
        const matchingPosts = posts.filter(post => post.categories && post.categories[0] === parentCategoryId);
        entry[`wpPostsArray`] = matchingPosts;
      }
    });
    // Replace the entry object with just the matching posts array
    subcategories.forEach(subcategory => {
      const camelKey = this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent;
      const entry = content[camelKey] as any;
      if (entry && entry.wpPostsArray) {
        content[camelKey] = entry.wpPostsArray;
      }
    });

    this.wpService.websiteContent.set(content);
    this.wpService.isLoading.set(false);
    this.helperService.log(this.wpService.websiteContent(), 'websiteContent after assigning subcategory posts', 'green', 'lightgreen', 'black');
  }
  ngAfterViewInit(): void {
    // Only run browser-specific code on the client side
    if (isPlatformBrowser(this.platformId)) {
      cursurCircle();
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.reinitializeThings();
          this.loadStyle('skin-1');
        }
      });
    }
  }

  protected onLoaderComplete(): void {
    this.loaderComplete.set(true);
    // The theme scripts first ran on NavigationEnd while the loader hid the page, so the
    // sticky header had nothing to bind to. Run them again now the page is rendered.
    if (isPlatformBrowser(this.platformId) && typeof jQuery !== 'undefined') {
      this.reinitializeThings();
    }
  }

  private reinitializeThings() {
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
      }, 1000);
    })(jQuery);
  }

  private loadStyle(skinName: String) {
    const head = this.document.getElementsByTagName('head')[0];

    //-----------------------------------------------
    // SKIN UPDATE
    //-----------------------------------------------
    let themeLinkskin = this.document.getElementById(
      'client-theme-skin'
    ) as HTMLLinkElement;

    if (themeLinkskin) {
      themeLinkskin.href = "assets/css/skin/" + skinName + ".scss";
    } else {
      const skin = this.document.createElement('link');
      skin.id = 'client-theme-skin';
      skin.rel = 'stylesheet';
      skin.href = "assets/css/skin/" + `${skinName}` + ".scss";

      head.appendChild(skin);
    }
  }


  projects: PortfolioProjects = { ...DEFAULT_PORTFOLIO_PROJECTS }

  private uncategorizedPostsEffect = effect(() => {
    const wpPosts = this.wpService.uncategorizedPosts();
    const data = this.wpService.fetchPostsUnderCategory(wpPosts, 'category-portfolio');

    const posts = (data as Array<WPPost | WPPost[]>).flatMap((entry) =>
      Array.isArray(entry) ? entry : [entry]
    );
    this.assignPostsToWebsiteContent(posts);

    this.projects.items = posts.map((post) => {
      const html = post.content?.rendered ?? '';
      const paragraphOne = this.helperService.getParagraphText(html, 0);
      const paragraphTwo = this.helperService.getParagraphText(html, 1);
      const paragraphThree = this.helperService.getParagraphText(html, 2);
      const paragraphFour = this.helperService.getParagraphText(html, 3);
      const paragraphFive = this.helperService.getParagraphText(html, 4);
      const imageUrl = post.featured_media_src_url ?? '';

      return {
        category: post.acf?.fieldone ?? '',
        image: imageUrl ?? null,
        title: paragraphOne,
        subtitle: paragraphTwo,
        image2: imageUrl ?? null,
        title2: paragraphThree,
        subtitle2: paragraphFour,
        author: paragraphFive,
        thumb: imageUrl ?? null,
      };
    });

    this.wpService.portfolioProjects.set(this.projects);

    // Update portfolioProjectsAlternateLayout categories
    const categories = this.projects.items.map(item => item.category);
    // const alternateCategories = categories.map((category, index) => {
    //   const cat = new PortfolioCategory2();
    //   cat.title = category;

    //   cat.class = `.col-${['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][index - 1] || 'one'}`;

    //   return cat;
    // });
    const currentAlternate = this.wpService.portfolioProjectsAlternateLayout();

    // currentAlternate.projects = this.projects.items.map((item, index) => {
    //   const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    //   return { ...item, category: `col-${words[index % 10]}` };
    // });


    this.wpService.portfolioProjectsAlternateLayout.set(currentAlternate);

    this.importPortfolioCategories(this.wpService.uncategorizedPosts());
    // this.helperService.log(alternateCategories, 'Portfolio Alternate Categories', 'blue', 'yellow', 'black');
    this.helperService.log(currentAlternate.projects, 'Portfolio Alternate Projects', 'blue', 'yellow', 'black');
    this.helperService.log(this.projects.items, 'Portfolio Items', 'red', 'blue', 'white');
  });


  importPortfolioCategories(posts: WPPost[]) {
    const categoriesPost = this.wpService.fetchPostsUnderCategory(posts, 'category-pcategories');
    const categoryPosts = (categoriesPost as Array<WPPost | WPPost[]>).flatMap((entry) =>
      Array.isArray(entry) ? entry : [entry]
    );

    const allProjectsCat = new PortfolioCategory2();
    allProjectsCat.title = 'All Projects';
    allProjectsCat.class = '*';

    const portfolioCategories = categoryPosts.map((post) => {
      const cat = new PortfolioCategory2();
      cat.class = post.acf?.fieldone ?? '';
      cat.title = post.title?.rendered ?? '';
      return cat;
    });

    const currentAlternate = this.wpService.portfolioProjectsAlternateLayout();
    currentAlternate.categories = [allProjectsCat, ...portfolioCategories];
    this.wpService.portfolioProjectsAlternateLayout.set(currentAlternate);

    this.helperService.log(this.wpService.portfolioProjectsAlternateLayout(), 'Portfolio Categories', 'hotpink', 'lightblue', 'yellow');
  }



}
