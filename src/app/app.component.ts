import { AfterViewInit, Component, inject, DOCUMENT, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { WordpressService } from './services/wordpress.service';
import { WPPost } from './interfaces/wordpress';
import { WebsiteContent, websiteContentExpertise } from './interfaces/website-content';
import { HelperService } from './services/helper.service';


declare var jQuery: any;
declare var cursurCircle: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {
  private router = inject(Router);
  private document = inject<Document>(DOCUMENT);
  private wpService = inject(WordpressService);
  private helperService = inject(HelperService);
  public uncategorizedPosts: WPPost[] = [];
  aboutUsOne: WPPost | undefined = {} as WPPost;
  websiteContent: WebsiteContent = {} as any;

  title = 'anih';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {

  }
  ngOnInit(): void {
    this.wpService.getAllPosts().subscribe(posts => {
      this.uncategorizedPosts = posts;
      this.wpService.getSubcategoriesByCategoryId(2).subscribe(subcategories => {
        subcategories.forEach(subcategory => {
          this.websiteContent[this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent] = { parentCategory: subcategory.id } as WPPost & any;
        });
        this.assignPostsToWebsiteContent(this.uncategorizedPosts);
        this.assignSubcategoryPostsToWebsiteContent(subcategories, this.uncategorizedPosts);
      });
    }
    );
  }

  assignPostsToWebsiteContent(posts: WPPost[]) {
    this.uncategorizedPosts.forEach((post: WPPost) => {
      if (post.slug && post.categories[0] === 2) {
        const camelKey = this.helperService.hyphenToCamel(post.slug);
        (this.websiteContent as any)[camelKey] = post;
      }
    }
    );
  }
  assignSubcategoryPostsToWebsiteContent(subcategories: any[], posts: WPPost[]) {
    subcategories.forEach(subcategory => {
      const camelKey = this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent;
      const entry = this.websiteContent[camelKey] as any;

      if (entry && entry.parentCategory) {
        const parentCategoryId = entry.parentCategory;
        const matchingPosts = posts.filter(post => post.categories && post.categories[0] === parentCategoryId);
        entry[`wpPostsArray`] = matchingPosts;
      }
    });
    // Replace the entry object with just the matching posts array
    subcategories.forEach(subcategory => {
      const camelKey = this.helperService.hyphenToCamel(subcategory.slug) as keyof WebsiteContent;
      const entry = this.websiteContent[camelKey] as any;
      if (entry && entry.wpPostsArray) {
        (this.websiteContent as any)[camelKey] = entry.wpPostsArray;
      }
    });
    this.logWebsiteContent();
  }

  logWebsiteContent() {
    console.log('\n%c═══════════════════════════════════════', 'color: #00CCFF; font-weight: bold');
    console.log('%c📦 WEBSITE CONTENT (with subcategory posts)', 'color: #00CCFF; font-weight: bold; font-size: 16px');
    console.log('%c═══════════════════════════════════════', 'color: #00CCFF; font-weight: bold');
    console.log(this.websiteContent);
    console.log('%c═══════════════════════════════════════\n', 'color: #00CCFF; font-weight: bold');
  }

  ngAfterViewInit(): void {
    cursurCircle();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.reinitializeThings();
        this.loadStyle('skin-1');
      }
    });
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
}
