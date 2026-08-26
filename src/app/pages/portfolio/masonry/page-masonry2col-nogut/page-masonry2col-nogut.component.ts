import { Component, effect, inject, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';
import { HelperService } from 'src/app/services/helper.service';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-page-masonry2col-nogut',
  templateUrl: './page-masonry2col-nogut.component.html',
  styleUrls: ['./page-masonry2col-nogut.component.scss'],
  imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageMasonry2colNogutComponent implements OnInit {
  wpService = inject(WordpressService);
  helperService = inject(HelperService);

  constructor() { }
  portfolioItems: any[] = [];
  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Masonry 2 Columns No Gap",
    currentPage: "Project-Masonry",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  // private uncategorizedPostsEffect = effect(() => {
  //   const wpPosts = this.wpService.uncategorizedPosts();
  //   const data = this.wpService.fetchPostsUnderCategory(wpPosts);

  //   // this.portfolioItems = data.map((post: any) => ({
  //   //   name: post.title.rendered,
  //   //   quote: post.content.rendered,
  //   //   image: post.imageUrl ?? 'assets/images/testimonials/anonymous-user.png',
  //   //   designation: null as any
  //   // }));
  //   this.helperService.log(wpPosts, 'POSTS FROM THE COMPONENT PageMasonry2colNogutComponent', 'red', 'blue', 'white');
  // });

}
