import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-error404',
    templateUrl: './page-error404.component.html',
    styleUrls: ['./page-error404.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageError404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Error 404",
    currentPage: "Error",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }
}
