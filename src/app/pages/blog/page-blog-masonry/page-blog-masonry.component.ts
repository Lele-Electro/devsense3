import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-blog-masonry',
    templateUrl: './page-blog-masonry.component.html',
    styleUrls: ['./page-blog-masonry.component.scss'],
    imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageBlogMasonryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog Masonary Style",
    currentPage: "Blog Masonary",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blogs = [
    {
      image: "assets/images/blog/portrait/pic1.jpg",
      date: "08.03.21",
      author: "Admin",
      comments: "5",
      title: "Customised coaching. Unlimited support. Exceptional results.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic1.jpg",
      date: "13.03.21",
      author: "Admin",
      comments: "5",
      title: "Our payroll knowledge. Your peace of mind.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/portrait/pic2.jpg",
      date: "16.03.21",
      author: "Admin",
      comments: "5",
      title: "Award-winning workplace solutions. By design and Graphics",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic3.jpg",
      date: "18.03.21",
      author: "Admin",
      comments: "3",
      title: "It was a shot from a million… and they preferred tough odds.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/portrait/pic6.jpg",
      date: "22.03.21",
      author: "Admin",
      comments: "5",
      title: "The highest standards. the most trusted transactions.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic5.jpg",
      date: "23.03.21",
      author: "Admin",
      comments: "2",
      title: "Online marketing education that just clicks. Guaranteed.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },{
      image: "assets/images/blog/portrait/pic3.jpg",
      date: "24.03.21",
      author: "Admin",
      comments: "5",
      title: "How bright ideas become brilliant solutions.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "assets/images/blog/blog-grid/pic6.jpg",
      date: "26.03.21",
      author: "Admin",
      comments: "3",
      title: "Turn your customer into an audience of one.",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    },
    {
      image: "",
      date: "28.03.21",
      author: "Admin",
      comments: "3",
      title: "When it comes to your house, don’t mess...",
      description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
    }
  ]
}
