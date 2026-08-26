import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionBlogSidebarComponent } from '../../../sections/blogs/section-blog-sidebar/section-blog-sidebar.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-blog-listing2',
    templateUrl: './page-blog-listing2.component.html',
    styleUrls: ['./page-blog-listing2.component.scss'],
    imports: [Header2Component, BannerComponent, RouterLink, SectionBlogSidebarComponent, Footer1Component]
})
export class PageBlogListing2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog list Style 2",
    currentPage: "Blog list Style 2",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blogs = [
    {
      type: "image",
      image: "assets/images/blog/default/thum3.jpg",
      date: "30.02.23",
      author: "Admin",
      comments: "0",
      title: "The Power of Social Media in Life",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam. Morbi orci mi, egestas et lorem vel, ullamcorper ultrices est. Donec luctus ornare ultricies. Integer a tristique erat. Praesent vestibulum nunc nec consequat venenatis. Etiam porttitor aliquet pretium. Praesent gravida elit enim, eget..."
    },
    {
      type: "image",
      image: "assets/images/blog/default/thum7.jpg",
      date: "30.02.23",
      author: "Admin",
      comments: "0",
      title: "The Power of Social Media in Life",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam. Morbi orci mi, egestas et lorem vel, ullamcorper ultrices est. Donec luctus ornare ultricies. Integer a tristique erat. Praesent vestibulum nunc nec consequat venenatis. Etiam porttitor aliquet pretium. Praesent gravida elit enim, eget..."
    },
    {
      type: "image",
      image: "assets/images/blog/default/thum8.jpg",
      date: "30.02.23",
      author: "Admin",
      comments: "0",
      title: "When Chocolate was Medicine",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam. Morbi orci mi, egestas et lorem vel, ullamcorper ultrices est. Donec luctus ornare ultricies. Integer a tristique erat. Praesent vestibulum nunc nec consequat venenatis. Etiam porttitor aliquet pretium. Praesent gravida elit enim, eget..."
    },
    {
      type: "slider",
      images:[
        "assets/images/blog/default/thum5.jpg",
        "assets/images/blog/default/thum6.jpg",
        "assets/images/blog/default/thum9.jpg"
      ],
      date: "01.03.21",
      author: "Admin",
      comments: "0",
      title: "When it comes to your house, don’t mess.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam. Morbi orci mi, egestas et lorem vel, ullamcorper ultrices est. Donec luctus ornare ultricies. Integer a tristique erat. Praesent vestibulum nunc nec consequat venenatis. Etiam porttitor aliquet pretium. Praesent gravida elit enim, eget..."
    }
  ]

  sidebar = {
    recentposts: [
      {
        image: "assets/images/blog/recent-blog/pic1.jpg",
        title: "Music can help us to look ideas",
        date: "30.02.23"
      },
      {
        image: "assets/images/blog/recent-blog/pic2.jpg",
        title: "Being beautiful is about singing loudly",
        date: "30.02.23"
      }
    ],
    categories: [
      {
        title: "Branding",
        count: "28"
      },
      {
        title: "Beauty",
        count: "05"
      },
      {
        title: "Design",
        count: "24"
      },
      {
        title: "Lifestyle",
        count: "15"
      },
      {
        title: "Photo",
        count: "20"
      }
    ],
    gallery: [
      {
        image: "assets/images/gallery/1.jpg",
        thumb: "assets/images/gallery/thumb/pic1.jpg"
      },
      {
        image: "assets/images/gallery/2.jpg",
        thumb: "assets/images/gallery/thumb/pic2.jpg"
      },
      {
        image: "assets/images/gallery/3.jpg",
        thumb: "assets/images/gallery/thumb/pic3.jpg"
      },
      {
        image: "assets/images/gallery/4.jpg",
        thumb: "assets/images/gallery/thumb/pic4.jpg"
      },
      {
        image: "assets/images/gallery/5.jpg",
        thumb: "assets/images/gallery/thumb/pic5.jpg"
      },
      {
        image: "assets/images/gallery/6.jpg",
        thumb: "assets/images/gallery/thumb/pic6.jpg"
      },
      {
        image: "assets/images/gallery/7.jpg",
        thumb: "assets/images/gallery/thumb/pic7.jpg"
      },
      {
        image: "assets/images/gallery/8.jpg",
        thumb: "assets/images/gallery/thumb/pic8.jpg"
      },
      {
        image: "assets/images/gallery/9.jpg",
        thumb: "assets/images/gallery/thumb/pic9.jpg"
      }
    ],
    tags: [
      "Kitchen",
      "Food",
      "Planining",
      "Between ",
      "Chairs",
      "Lawn",
      "Table",
      "Mantinance",
      "Room",
      "Landscape ",
      "Bedroom "
    ]
  }
}
