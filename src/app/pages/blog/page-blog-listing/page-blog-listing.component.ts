import { Component, OnInit } from '@angular/core';
import { SafePipe } from '../../../pipes/safe.pipe';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionBlogSidebarComponent } from '../../../sections/blogs/section-blog-sidebar/section-blog-sidebar.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-blog-listing',
    templateUrl: './page-blog-listing.component.html',
    styleUrls: ['./page-blog-listing.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, RouterLink, SectionBlogSidebarComponent, Footer1Component, SafePipe]
})
export class PageBlogListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog list Style",
    currentPage: "Blog list",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blogs = [
    {
      type: "image",
      image: "assets/images/blog/default/thum1.jpg",
      date: "30.02.23",
      author: "Admin",
      comments: "0",
      title: "The Power of Social Media in Life",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      type: "image",
      image: "assets/images/blog/default/thum4.jpg",
      date: "30.02.23",
      author: "Admin",
      comments: "0",
      title: "When Chocolate was Medicine",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
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
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      type: "youtube",
      thumb: "https://img.youtube.com/vi/8FmJ8XP-6Cs/0.jpg",
      link: "https://www.youtube.com/watch?v=OfFFZnOtqFQ",
      date: "09.03.21",
      author: "Admin",
      comments: "0",
      title: "You Tube Video don’t get framed",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      type: "video",
      thumb: "https://i.vimeocdn.com/video/639855695_590x332.jpg",
      link: "https://player.vimeo.com/video/112734492",
      date: "11.03.21",
      author: "Admin",
      comments: "0",
      title: "Vimeo Video don’t get framed.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      type: "iframe",
      link: "https://www.youtube.com/embed/dXM6i5-sdVg/hq720.jpg",
      date: "05.03.21",
      author: "Admin",
      comments: "0",
      title: "Change Your Mind Change Your Luck",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      type: "iframe",
      link: "https://player.vimeo.com/video/256376101",
      date: "07.03.21",
      author: "Admin",
      comments: "0",
      title: "A Brief History Of Creation",
      description: "Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam."
    },
    {
      type: "nomedia",
      date: "26.02.21",
      author: "Admin",
      comments: "0",
      title: "Change Your Mind Change Your Luck You Tube Video don’t get framed by the competition, trust our solid reputation. Asperiores, tenetur, blanditiis, quaerat",
      description: ""
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
