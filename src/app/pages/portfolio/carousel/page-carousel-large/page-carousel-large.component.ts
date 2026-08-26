import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionPortfolioProductDetailsShareComponent } from '../../../../sections/portfolio/section-portfolio-product-details-share/section-portfolio-product-details-share.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-carousel-large',
    templateUrl: './page-carousel-large.component.html',
    styleUrls: ['./page-carousel-large.component.scss'],
    imports: [Header2Component, BannerComponent, SectionPortfolioProductDetailsShareComponent, Footer1Component]
})
export class PageCarouselLargeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Carousel Large",
    currentPage: "Project-Carousel",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  portfolio = {
    slider: [
      "assets/images/projects/portrait/port-1.jpg",
      "assets/images/projects/portrait/port-2.jpg",
      "assets/images/projects/portrait/port-3.jpg",
      "assets/images/projects/portrait/port-4.jpg",
      "assets/images/projects/portrait/port-5.jpg",
      "assets/images/projects/portrait/port-6.jpg",
      "assets/images/projects/portrait/port-7.jpg",
      "assets/images/projects/portrait/port-8.jpg",
      "assets/images/projects/portrait/port-9.jpg"
    ],
    title: "Award-winning workplace solutions. By design.",
    description: "<p>Many of our projects cannot be featured in this section due to the Security levels of the space. lorem is a ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.</p> <p>viverra nulla ut metus varius laoreet. Quisque rutrum. Aene imperdiet. Etiamultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas temp, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,luts pulvinar, hendr erit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis fauci bus at. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh or. Donec sodales sagitis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec quam felis, ultricies nec, pellen esque eu pretium sem.</p>",
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
