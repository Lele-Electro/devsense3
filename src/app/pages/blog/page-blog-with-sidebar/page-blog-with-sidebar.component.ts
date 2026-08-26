import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionBlogSidebarComponent } from '../../../sections/blogs/section-blog-sidebar/section-blog-sidebar.component';
import { SectionBlogCommentsComponent } from '../../../sections/blogs/section-blog-comments/section-blog-comments.component';
import { SectionBlogAreaComponent } from '../../../sections/blogs/section-blog-area/section-blog-area.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-blog-with-sidebar',
    templateUrl: './page-blog-with-sidebar.component.html',
    styleUrls: ['./page-blog-with-sidebar.component.scss'],
    imports: [Header2Component, BannerComponent, SectionBlogAreaComponent, SectionBlogCommentsComponent, SectionBlogSidebarComponent, Footer1Component]
})
export class PageBlogWithSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Post With Right Sidebar",
    currentPage: "Post right sidebar",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blog = {
    date: "30.02.23",
    author: "Admin",
    comments: "0",
    title: "The Power of Social Media in Life, What is the Difference between Web and Brand.",
    image: "",
    description: "<p>Who among us does not feel the shadow of fear cast by the cowardly laws of these past years? The Scoundrel Laws terrorize not only those who might commit violence, but anyone who associates with them. They reward those who denounce their are brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts.</p><p> The experience of being the first designer at Ueno LA comes with a ton of excitement, but it also brings a level of anxiety that I hadn’t ever felt before. Transitioning from “I’m a huge fan” into “Oh shit, I’m a designer here” came at Hyperloop speed. But the team has been super welcoming and I couldn’t be happier with my decision to join.</p><blockquote class='author-quote'><h4 class='m-b0'><i class='fa fa-quote-left'></i>We thought a book is quite a wait away and decided to share some of the notes from his New York business meetings meanwhile.</h4></blockquote><p>We needed a way to let everyone know that we were here, so we had this little shindig. I wrangled up a couple of our super dope designers from the SF office, Jenny Johannesson & Robbin Cenijn. (They actually happened to be in town for the many Awwwards conference, so I technically just borrowed them, no wrangling involved.) We ordered some pizza, picked up some cheese, and made sure the beer was flowing.</p><div class='row sx-single-small-media'><div class='col-md-12'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/single/2.jpg' alt=''></div></div></div><div class='col-md-4 col-sm-4'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/portrait/pic1.jpg' alt=''></div></div></div><div class='col-md-4 col-sm-4'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/portrait/pic7.jpg' alt=''></div></div></div><div class='col-md-4 col-sm-4'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/portrait/pic4.jpg' alt=''></div></div></div></div><p>We needed a way to let everyone know that we were here, so we had this little shindig. I wrangled up a couple of our super dope designers from the SF office, Jenny Johannesson & Robbin Cenijn.</p><p><strong>(They actually happened to be in town for the Awwwards conference, so I technically just borrowed them, no wrangling involved.) </strong></p><p>We ordered some pizza, picked up some cheese, and made sure the beer was flowing.</p>",
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
    ],
    prev: {
      title: "Be On The Winning Side"
    }, 
    next: {
      title: "Work Hard and Be Nice!"
    }
  }

  commentslist = {
    count: "3",
    comments: [
      {
        image: "assets/images/blog/blog-comment/av1.jpg",
        date: "24.03.21",
        name: "Sofia Helin",
        comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        replies: [
          {
            image: "assets/images/blog/blog-comment/av2.jpg",
            date: "26.02.21",
            name: "Brayden",
            comment: "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary.",
            replies: []
          },
          {
            image: "assets/images/blog/blog-comment/av3.jpg",
            date: "27.02.21",
            name: "Sofia Helin",
            comment: "The only way to track your client’s feedback far and himself to he conduct, see a spirit, of them they set could project a for the sign his support space soon was then to",
            replies: []
          }
        ]
      }
    ]
  }

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
