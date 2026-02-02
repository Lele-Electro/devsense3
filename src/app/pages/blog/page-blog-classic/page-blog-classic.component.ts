import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-blog-classic',
    templateUrl: './page-blog-classic.component.html',
    styleUrls: ['./page-blog-classic.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageBlogClassicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog Classic Style",
    currentPage: "Blog Classic",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blogs = [
    {
      category: "Tips & Trics",
      title: "How to combine Typography perfect for any field of the life?",
      subtitle: "Build a Beautiful Blog With Ease Home We all intend to plan ahead. Never ever think of giving up. Winners never quit…",
      day: "28",
      month: "July",
      year: "2023"
    },
    {
      category: "Products",
      title: "Workflow & Enhance the User Experience with Design System",
      subtitle: "",
      day: "28",
      month: "Aug",
      year: "2023"
    },
    {
      category: "Inspiration",
      title: "How to Create a Vintage Magazine Effect in a Sergey",
      subtitle: "Build a Beautiful Blog With Ease Home We all intend to plan ahead. Never ever think of giving up. Winners never quit…",
      day: "28",
      month: "Sep",
      year: "2023"
    },
    {
      category: "Tips & Trics",
      title: "How to combine Typography perfect for any field of the life?",
      subtitle: "",
      day: "28",
      month: "July",
      year: "2023"
    },
    {
      category: "Products",
      title: "Workflow & Enhance the User Experience with Design System",
      subtitle: "Build a Beautiful Blog With Ease Home We all intend to plan ahead. Never ever think of giving up. Winners never quit…",
      day: "28",
      month: "Aug",
      year: "2023"
    },
    {
      category: "Inspiration",
      title: "How to Create a Vintage Magazine Effect in a Sergey",
      subtitle: "",
      day: "28",
      month: "Sep",
      year: "2023"
    },
    {
      category: "Tips & Trics",
      title: "How to combine Typography perfect for any field of the life?",
      subtitle: "Build a Beautiful Blog With Ease Home We all intend to plan ahead. Never ever think of giving up. Winners never quit…",
      day: "28",
      month: "July",
      year: "2023"
    },
    {
      category: "Products",
      title: "Workflow & Enhance the User Experience with Design System",
      subtitle: "Build a Beautiful Blog With Ease Home We all intend to plan ahead. Never ever think of giving up. Winners never quit…",
      day: "28",
      month: "Aug",
      year: "2023"
    },
    {
      category: "Inspiration",
      title: "How to Create a Vintage Magazine Effect in a Sergey",
      subtitle: "",
      day: "28",
      month: "Sep",
      year: "2023"
    }
  ]
}
