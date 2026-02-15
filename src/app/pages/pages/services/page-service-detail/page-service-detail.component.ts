import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionServicesSidebarComponent } from '../../../../sections/services/section-services-sidebar/section-services-sidebar.component';
import { SectionServiceDetailAreaComponent } from '../../../../sections/services/section-service-detail-area/section-service-detail-area.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-service-detail',
    templateUrl: './page-service-detail.component.html',
    styleUrls: ['./page-service-detail.component.scss'],
    imports: [Header1Component, BannerComponent, SectionServiceDetailAreaComponent, SectionServicesSidebarComponent, Footer1Component]
})
export class PageServiceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Service Details",
    currentPage: "Service detail",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  service = {
    image: "assets/images/gallery/6.jpg",
    title: "We will help you to ideate, design and implement your product from conception to iterative.",
    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>",
    otherskills: {
      title: "Unlimited skills for super projects.",
      skills: [
        "We provide free initial consultation and support.",
        "We work with some of the most successful businesses.",
        "We have the professional designers team."
      ]
    }
  }

  sidebar = {
    offer: {
      title: "GET 10% OFF TODAY",
      description: "A Completely Safe and Advanced Cleaning Solution for both Petrol and Diesel Engines"
    },
    plan: {
      type: "Pro Plan",
      price: "$39",
      tenure: "Month",
      features: [
        "SEO Optimization",
        "Professional Support",
        "Software Updating",
        "Lifetime Features"
      ]
    }
  }
}
