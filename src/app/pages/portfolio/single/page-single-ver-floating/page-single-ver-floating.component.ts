import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-single-ver-floating',
  templateUrl: './page-single-ver-floating.component.html',
  styleUrls: ['./page-single-ver-floating.component.scss']
})
export class PageSingleVerFloatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Vertical floating",
    currentPage: "Portfolio Vertical floating",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  portfolio = {
    images: [
      "assets/images/projects/portrait/port-2.jpg",
      "assets/images/projects/portrait/port-7.jpg",
      "assets/images/projects/portrait/port-11.jpg",
      "assets/images/projects/portrait/port-12.jpg"
    ],
    title: "Award-winning workplace solutions. By design.",
    description: "<p>Many of our projects cannot be featured in this section due to the Security levels of the space. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.</p>",
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
