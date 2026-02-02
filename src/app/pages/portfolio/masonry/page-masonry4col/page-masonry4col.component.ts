import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-masonry4col',
    templateUrl: './page-masonry4col.component.html',
    styleUrls: ['./page-masonry4col.component.scss'],
    imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageMasonry4colComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Masonry 4 Columns",
    currentPage: "Project-Masonry",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  projects = {
    categories: [
      {
        category: "*",
        title: "All",
        count: "12"
      },{
        category: "cat-1",
        title: "Artwork",
        count: "3"
      },{
        category: "cat-2",
        title: "Brandng",
        count: "2"
      },{
        category: "cat-3",
        title: "Mockup",
        count: "2"
      },{
        category: "cat-4",
        title: "Motion",
        count: "4"
      },{
        category: "cat-5",
        title: "Package",
        count: "1"
      }
    ],
    items: [
      {
        category: "cat-1",
        image: "assets/images/projects/square/squa-1.jpg",
        title: "Photography",
        subtitle: "Graphic Studio",
        image2: "assets/images/projects/square/squa-1.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/square/squa-1.jpg"
      },{
        category: "cat-2",
        image: "assets/images/projects/portrait/port-1.jpg",
        title: "Branding",
        subtitle: "Branding, Print",
        image2: "assets/images/projects/portrait/port-1.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-1.jpg"
      },{
        category: "cat-3",
        image: "assets/images/projects/long/long-1.jpg",
        title: "Ui/Ux & interaction",
        subtitle: "Print, Packaging",
        image2: "assets/images/projects/long/long-1.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/long/long-1.jpg"
      },{
        category: "cat-4",
        image: "assets/images/projects/square/squa-7.jpg",
        title: "Graphic design",
        subtitle: "Advetising",
        image2: "assets/images/projects/square/squa-7.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/square/squa-7.jpg"
      },{
        category: "cat-5",
        image: "assets/images/projects/long/long-6.jpg",
        title: "Animation & motion",
        subtitle: "Media Marketing",
        image2: "assets/images/projects/long/long-6.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/long/long-6.jpg"
      },{
        category: "cat-4",
        image: "assets/images/projects/portrait/port-5.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-5.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-5.jpg"
      },{
        category: "cat-3",
        image: "assets/images/projects/long/long-3.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/long/long-3.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/long/long-3.jpg"
      },{
        category: "cat-2",
        image: "assets/images/projects/square/squa-8.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/square/squa-8.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/square/squa-8.jpg"
      },{
        category: "cat-1",
        image: "assets/images/projects/square/squa-9.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/square/squa-9.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/square/squa-9.jpg"
      },{
        category: "cat-3",
        image: "assets/images/projects/land/land-1.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/land/land-1.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-1.jpg"
      },{
        category: "cat-2",
        image: "assets/images/projects/portrait/port-6.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-6.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-6.jpg"
      },{
        category: "cat-1",
        image: "assets/images/projects/portrait/port-4.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/portrait/port-4.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-4.jpg"
      }
    ]
  }
}
