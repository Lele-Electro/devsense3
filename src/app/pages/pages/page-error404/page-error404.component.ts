import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error404',
  templateUrl: './page-error404.component.html',
  styleUrls: ['./page-error404.component.scss']
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
