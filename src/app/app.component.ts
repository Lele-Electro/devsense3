import { AfterViewInit, Component, inject, DOCUMENT, OnInit, signal, WritableSignal, PLATFORM_ID, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, Event, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordpressService } from './services/wordpress.service';
import { WPPost } from './interfaces/wordpress';
import { PortfolioProjects, WebsiteContent, websiteContentExpertise } from './interfaces/website-content';
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

  aboutUsOne: WPPost | undefined = {} as WPPost;


  title = 'devsense';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {

  }
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
      this.wpService.getSubcategoriesByCategoryId(2).subscribe(subcategories => {
        const content = this.wpService.websiteContent();
        subcategories.forEach(subcategory => {
          content[this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent] = { parentCategory: subcategory.id } as WPPost & any;
        });
        this.wpService.websiteContent.set(content);
        this.assignPostsToWebsiteContent(this.wpService.uncategorizedPosts());
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


  projects: PortfolioProjects = {
    categories: [
      {
        category: "*",
        title: "All",
        count: "12"
      }, {
        category: "cat-1",
        title: "Artwork",
        count: "3"
      }, {
        category: "cat-2",
        title: "Brandng",
        count: "2"
      }, {
        category: "cat-3",
        title: "Mockup",
        count: "2"
      }, {
        category: "cat-4",
        title: "Motion",
        count: "4"
      }, {
        category: "cat-5",
        title: "Package",
        count: "1"
      }
    ],
    items: [
      {
        category: "cat-1",
        image: "assets/images/projects/portrait/port-1.jpg",
        title: "Photography",
        subtitle: "Graphic Studio",
        image2: "assets/images/projects/portrait/port-1.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-1.jpg"
      }, {
        category: "cat-2",
        image: "assets/images/projects/portrait/port-2.jpg",
        title: "Branding",
        subtitle: "Branding, Print",
        image2: "assets/images/projects/portrait/port-2.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-2.jpg"
      }, {
        category: "cat-3",
        image: "assets/images/projects/portrait/port-3.jpg",
        title: "Ui/Ux & interaction",
        subtitle: "Print, Packaging",
        image2: "assets/images/projects/portrait/port-3.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-3.jpg"
      }, {
        category: "cat-4",
        image: "assets/images/projects/portrait/port-4.jpg",
        title: "Graphic design",
        subtitle: "Advetising",
        image2: "assets/images/projects/portrait/port-4.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-4.jpg"
      }, {
        category: "cat-5",
        image: "assets/images/projects/portrait/port-5.jpg",
        title: "Animation & motion",
        subtitle: "Media Marketing",
        image2: "assets/images/projects/portrait/port-5.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-5.jpg"
      }, {
        category: "cat-4",
        image: "assets/images/projects/portrait/port-6.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-6.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-6.jpg"
      }, {
        category: "cat-3",
        image: "assets/images/projects/portrait/port-7.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/portrait/port-7.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-7.jpg"
      }, {
        category: "cat-2",
        image: "assets/images/projects/portrait/port-8.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/portrait/port-8.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-8.jpg"
      }, {
        category: "cat-1",
        image: "assets/images/projects/portrait/port-9.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-9.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-9.jpg"
      }, {
        category: "cat-3",
        image: "assets/images/projects/portrait/port-10.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-10.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-10.jpg"
      }, {
        category: "cat-2",
        image: "assets/images/projects/portrait/port-11.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-11.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-11.jpg"
      }, {
        category: "cat-1",
        image: "assets/images/projects/portrait/port-12.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-12.jpg",
        title2: "Toni Test",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-12.jpg"
      }
    ]
  }

  private uncategorizedPostsEffect = effect(() => {
    const wpPosts = this.wpService.uncategorizedPosts();
    const data = this.wpService.fetchPostsUnderCategory(wpPosts, 'category-portfolio');

    const posts = (data as Array<WPPost | WPPost[]>).flatMap((entry) =>
      Array.isArray(entry) ? entry : [entry]
    );

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

    this.helperService.log(this.projects.items, 'Portfolio Items', 'red', 'blue', 'white');
  });


}
