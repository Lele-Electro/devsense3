import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-fonts-icons',
  templateUrl: './page-fonts-icons.component.html',
  styleUrls: ['./page-fonts-icons.component.scss']
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
