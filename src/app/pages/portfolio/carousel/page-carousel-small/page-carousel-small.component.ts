import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionPortfolioProductDetailsShareComponent } from '../../../../sections/portfolio/section-portfolio-product-details-share/section-portfolio-product-details-share.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-carousel-small',
    templateUrl: './page-carousel-small.component.html',
    styleUrls: ['./page-carousel-small.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, SectionPortfolioProductDetailsShareComponent, Footer1Component]
})
export class PageCarouselSmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Carousel Small",
    currentPage: "Project-Carousel",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  portfolio = {
    slider: [
      "assets/images/projects/square/squa-1.jpg",
      "assets/images/projects/square/squa-2.jpg",
      "assets/images/projects/square/squa-3.jpg"
    ],
    title: "Award-winning workplace solutions. australia’s leading innovator of technology in property. smarter buildings. better experiences.",
    description: "<p>Many of our projects cannot be featured in this section due to the Security levels of the space. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.</p>",
    details: {
      date: "March 10, 2023",
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
