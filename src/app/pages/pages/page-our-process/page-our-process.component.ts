import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-our-process',
    templateUrl: './page-our-process.component.html',
    styleUrls: ['./page-our-process.component.scss'],
    imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageOurProcessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Our Process",
    currentPage: "Our Process",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  process = [
    {
      type: "image",
      image: "assets/images/our-history/4.jpg"
    },
    {
      type: 'data',
      serial: "01",
      title: "Research for Project.",
      description: "I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone."
    },
    {
      type: "image",
      image: "assets/images/our-history/1.jpg"
    },
    {
      type: 'data',
      serial: "02",
      title: "Design the Details.",
      description: "Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating."
    },
    {
      type: "image",
      image: "assets/images/our-history/2.jpg"
    },
    {
      type: 'data',
      serial: "03",
      title: "Design Development And Testing.",
      description: "The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you."
    },
    {
      type: "image",
      image: "assets/images/our-history/3.jpg"
    },
    {
      type: 'data',
      serial: "04",
      title: "Complete the Project.",
      description: "I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone."
    },{
      type: "image",
      image: "assets/images/our-history/5.jpg"
    }
  ]
}
