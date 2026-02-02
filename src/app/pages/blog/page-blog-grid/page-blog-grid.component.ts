import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-blog-grid',
    templateUrl: './page-blog-grid.component.html',
    styleUrls: ['./page-blog-grid.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageBlogGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog Grid Style",
    currentPage: "Blog Grid",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blogs = [
    {
      image: "assets/images/blog/blog-grid/pic1.jpg",
      date: "26.02.21",
      author: "Admin",
      title: "Overcoming creativity blocks",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic2.jpg",
      date: "08.02.21",
      author: "Admin",
      title: "How To Know When The Work is Complete",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic3.jpg",
      date: "10.02.21",
      author: "Admin",
      title: "The Role of Four Design in Development",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      date: "14.02.21",
      author: "Admin",
      title: "What is Web and App Development?",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic5.jpg",
      date: "16.02.21",
      author: "Admin",
      title: "The Power of Social Media in Life",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic6.jpg",
      date: "18.02.21",
      author: "Admin",
      title: "",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },{
      image: "assets/images/blog/blog-grid/pic7.jpg",
      date: "24.02.21",
      author: "Admin",
      title: "Build a Beautiful Blog With Ease",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic8.jpg",
      date: "26.02.21",
      author: "Admin",
      title: "Helping you and your house become better",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic9.jpg",
      date: "28.02.21",
      author: "Admin",
      title: "Creating quality urban lifestyles, building...",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    }
  ]
}
