import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-fonts-icons',
    templateUrl: './page-fonts-icons.component.html',
    styleUrls: ['./page-fonts-icons.component.scss'],
    imports: [Header1Component, BannerComponent, Footer1Component]
})
export class PageFontsIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Icon Font Style",
    currentPage: "Icon Fonts",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  icons = [
    "flaticon-sketch",
    "flaticon-layers",
    "flaticon-picture",
    "flaticon-id-card",
    "flaticon-right-quotation-sign",
    "flaticon-left-quote",
    "flaticon-paper-plane",
    "flaticon-email",
    "flaticon-smartphone",
    "flaticon-telephone",
    "flaticon-pin",
    "flaticon-up-arrow",
    "flaticon-return",
    "flaticon-next",
    "flaticon-down-arrow",
    "flaticon-half-circle",
    "flaticon-circle-button-thick-outline",
    "flaticon-business-graphic-with-semicircles"
  ]
}
