import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionBlogCommentsComponent } from '../../../sections/blogs/section-blog-comments/section-blog-comments.component';
import { SectionBlogAreaComponent } from '../../../sections/blogs/section-blog-area/section-blog-area.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-blog-single',
    templateUrl: './page-blog-single.component.html',
    styleUrls: ['./page-blog-single.component.scss'],
    imports: [Header2Component, BannerComponent, SectionBlogAreaComponent, SectionBlogCommentsComponent, Footer1Component]
})
export class PageBlogSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Blog Single Style",
    currentPage: "Blog Single",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  blog = {
    date: "30.02.23",
    author: "Admin",
    comments: "0",
    title: "The Power of Social Media in Life, What is the Difference between Web and Brand.",
    image: "assets/images/blog/single/1.jpg",
    description: "<p>Who among us does not feel the shadow of fear cast by the cowardly laws of these past of the years? The Scoundrel Laws terrorize not only those who might commit violence, but anyone is who associates with them. They reward those who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts.</p><p> The experience of being the first designer at Ueno LA comes with a ton of excitement, but also brings a level of anxiety that I hadn’t ever felt before. Transitioning from “I’m a huge fan” into, I am a designer here” came at Hyperloop speed.</p><blockquote class='author-quote'><h4 class='m-b0'><i class='fa fa-quote-left'></i>We thought a book is quite a wait away and decided to share some of the notes from his New York business meetings meanwhile.</h4></blockquote><p>We needed a way to let everyone know that we were here, so we had this little shindig. I am wrangled up a couple of our super dope designers from the SF office, Jenny Johannesson & Robbin Cenijn. (They actually happened to be in town for the Awwwards conference, so I am technically just borrowed them, no wrangling involved.) We ordered some pizza, picked up some cheese, and made sure the beer was flowing.</p><div class='row sx-single-small-media'><div class='col-md-12 col-sm-12'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/default/thum5.jpg' alt=''></div></div></div><div class='col-md-6 col-sm-6'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/portrait/pic1.jpg' alt=''></div></div></div><div class='col-md-6 col-sm-6'><div class='sx-box m-b30'><div class='sx-media'><img src='assets/images/blog/portrait/pic6.jpg' alt=''></div></div></div></div><p>We needed a way to let everyone know that we were here, so we had this little shindig. I am wrangled up a couple of our super dope designers from the SF office, Jenny Johannesson & Robbin Cenijn.</p><p><strong>(They actually happened to be in town for the Awwwards conference, so I technically just borrowed them, no wrangling involved.) </strong></p><p>We ordered some pizza, picked up some cheese, and made sure the beer was flowing.</p>",
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
}
