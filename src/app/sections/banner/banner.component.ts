import { DOCUMENT } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WPPost } from 'src/app/interfaces/wordpress';
import { WordpressService } from 'src/app/services/wordpress.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [RouterLink]
})
export class BannerComponent implements OnInit, OnDestroy {

  readonly data = input<any>();
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private preloadLink?: HTMLLinkElement;
  // private wpService = inject(WordpressService);
  aboutUsOne: WPPost | undefined = {} as WPPost;

  constructor() { }

  ngOnInit(): void {
    const background = this.data()?.background;

    if (background) {
      this.preloadLink = this.renderer.createElement('link');
      this.renderer.setAttribute(this.preloadLink, 'rel', 'preload');
      this.renderer.setAttribute(this.preloadLink, 'as', 'image');
      this.renderer.setAttribute(this.preloadLink, 'href', background);
      this.renderer.setAttribute(this.preloadLink, 'fetchpriority', 'high');
      this.renderer.appendChild(this.document.head, this.preloadLink);
    }

    // this.wpService.getPostsByCategoryId(2).subscribe(posts => {
    //   console.log('%c🚀 Posts in category 1:', 'color: #ff00ff; font-size: 16px; font-weight: bold;', posts);

    //   this.aboutUsOne = posts?.find(post => post.slug === 'about-us-one');
    //   if (this.aboutUsOne) {
    //     (window as any)['about-us-one'] = this.aboutUsOne;
    //     console.log('%c🚀 Posts in category 1:', 'color: tomato; font-size: 16px; font-weight: bold;', this.aboutUsOne);
    //   }
    // });
  }

  ngOnDestroy(): void {
    if (this.preloadLink?.parentNode) {
      this.renderer.removeChild(this.document.head, this.preloadLink);
    }
  }

}
