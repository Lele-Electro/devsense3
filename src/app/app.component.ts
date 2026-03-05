import { AfterViewInit, Component, inject, DOCUMENT, OnInit, PLATFORM_ID, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, Event, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordpressService } from './services/wordpress.service';
import { WPPost } from './interfaces/wordpress';
import { DEFAULT_PORTFOLIO_PROJECTS, PortfolioProjects, WebsiteContent, serviceCard } from './interfaces/website-content';
import { HelperService } from './services/helper.service';
import { catchError, concatMap, forkJoin, map, of } from 'rxjs';
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
  protected wpService = inject(WordpressService);
  private helperService = inject(HelperService);

  title = 'devsense';

  constructor() { }
  ngOnInit(): void {
    this.wpService.getAllPosts().pipe(
      concatMap((posts: WPPost[]) => {
        const enriched$ = posts.map(post =>
          post.featured_media
            ? this.wpService.getMedia(post.featured_media).pipe(
              map(url => { post.imageUrl = url ?? undefined; return post; }),
              catchError(() => { post.imageUrl = undefined; return of(post); })
            )
            : of(post)
        );
        return enriched$.length ? forkJoin(enriched$) : of([]);
      })
    ).subscribe(posts => {
      this.wpService.uncategorizedPosts.set(posts);


      this.helperService.log(this.wpService.uncategorizedPosts(), 'All uncategorized posts:', 'yellow', 'green', 'black');
      this.wpService.getSubcategoriesByCategoryId(3).subscribe(subcategories => {
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
    setTimeout(() => {
      this.wpService.isLoading.set(false);
    }, 5000);
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
    const allServices = this.wpService.fetchPostsUnderCategory(wpPosts, 'category-services');

    const posts = (data as Array<WPPost | WPPost[]>).flatMap((entry) =>
      Array.isArray(entry) ? entry : [entry]
    );

    const serviceCards: serviceCard[] = allServices.map((service: any) => ({
      icon: service.acf?.fa_icon ?? '',
      title: service.title.rendered,
      description: service.content.rendered,
      number: service.acf?.number,
      image: service.featured_media_src_url ?? ''
    }));
    const servicesIntroRaw = serviceCards.find(service => service.number === 7);
    const introDescription = servicesIntroRaw?.description ?? '';
    const serviceIntro = {
      title: this.helperService.getParagraphText(introDescription, 0) || servicesIntroRaw?.title || '',
      paragraph: this.helperService.getParagraphText(introDescription, 1) || ''
    };
    const filteredCards = serviceCards.filter(card => card.number !== 7);

    this.wpService.services.set({ serviceCard: filteredCards, serviceIntro });

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
        category: paragraphOne,
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

    this.helperService.log(filteredCards, 'Our Services Cards:', 'cyan', '#2196F3', '#fff');

    this.helperService.log(this.projects.items, 'Portfolio Items', 'red', 'blue', 'white');
  });


}
