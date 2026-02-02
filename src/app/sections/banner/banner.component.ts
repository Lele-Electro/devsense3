import { Component, inject, OnInit, input } from '@angular/core';
import { WPPost } from 'src/app/interfaces/wordpress';
import { WordpressService } from 'src/app/services/wordpress.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    imports: [RouterLink]
})
export class BannerComponent implements OnInit {

  readonly data = input<any>();
  private wpService = inject(WordpressService);
  aboutUsOne: WPPost | undefined = {} as WPPost;

  constructor() { }

  ngOnInit(): void {

    this.wpService.getPostsByCategoryId(2).subscribe(posts => {
      console.log('%c🚀 Posts in category 1:', 'color: #ff00ff; font-size: 16px; font-weight: bold;', posts);

      this.aboutUsOne = posts?.find(post => post.slug === 'about-us-one');
      if (this.aboutUsOne) {
        (window as any)['about-us-one'] = this.aboutUsOne;
        console.log('%c🚀 Posts in category 1:', 'color: tomato; font-size: 16px; font-weight: bold;', this.aboutUsOne);
      }
    });
  }

}
