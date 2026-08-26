import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-team-detail',
    templateUrl: './page-team-detail.component.html',
    styleUrls: ['./page-team-detail.component.scss'],
    imports: [Header2Component, BannerComponent, Footer1Component]
})
export class PageTeamDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Single Team Detail",
    currentPage: "Team Detail",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  detail = {
    image: "assets/images/our-team5/8.jpg",
    about: "Provide smart and flexible digital services",
    description: "We created a visual storytelling experience to spotlight Harmless Harvest’s ground-breaking ecosystem based business.",
    specializations: [
      {
        skill: "Photoshop",
        percentage: "80"
      },
      {
        skill: "Sketch",
        percentage: "90"
      },
      {
        skill: "Illustrator",
        percentage: "95"
      },
      {
        skill: "AutoCAD",
        percentage: "73"
      }
    ],
    email: "7xteam@gmail.com",
    contact: "(+298) 012-3456-789",
    address: "756 Livingston Street, Brooklyn, NY 11201, US",
    website: "www.7xtheme-site.com"
  }
}
