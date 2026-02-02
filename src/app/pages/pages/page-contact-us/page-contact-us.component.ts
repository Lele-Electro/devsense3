import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, Footer1Component]
})
export class PageContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Lets get in touch",
    currentPage: "Contact us",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  contact = {
    phone: "(123) 456-78910",
    email: "7xthemedemo@gmail.com",
    address: "09, Martin Street B190 Polo Alto, San Francisco"
  }
}
