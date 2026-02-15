import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionPortfolioProductDetailsShareComponent } from '../../../../sections/portfolio/section-portfolio-product-details-share/section-portfolio-product-details-share.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-single-ver-wide-video',
    templateUrl: './page-single-ver-wide-video.component.html',
    styleUrls: ['./page-single-ver-wide-video.component.scss'],
    imports: [Header1Component, BannerComponent, SectionPortfolioProductDetailsShareComponent, Footer1Component]
})
export class PageSingleVerWideVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Vertical Wide Video",
    currentPage: "Portfolio Vertical Wide Video",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  portfolio = {
    video: {
      thumb: "assets/images/projects/land/land-3.jpg",
      link: "https://www.youtube.com/watch?v=OfFFZnOtqFQ"
    },
    images: [
      "assets/images/projects/land/land-2.jpg",
      "assets/images/projects/land/land-7.jpg",
      "assets/images/projects/land/land-10.jpg",
      "assets/images/projects/land/land-9.jpg"
    ],
    title: "Award-winning workplace solutions. australia’s leading innovator of technology in property. smarter buildings. better experiences.",
    description: "<p>Many of our projects cannot be featured in this section due to the Security levels of the space. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.</p><p>viverra nulla ut metus varius laoreet. Quisque rutrum. Aene imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas temp, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luts pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis fauci bus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagitis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec quam felis, ultricies nec, pellen esque eu pretium sem.</p>",
    details: {
      date: "March 10, 2021",
      client: "Studio Massimo, Italy",
      category: "Design, Illustration",
      share: [
        {
          icon: "fa-behance",
          link: "https://www.behance.net/"
        },
        {
          icon: "fa-facebook",
          link: "https://www.facebook.com/"
        },
        {
          icon: "fa-twitter",
          link: "https://twitter.com/"
        },
        {
          icon: "fa-instagram",
          link: "https://www.instagram.com/"
        }
      ]
    }
  }
}
