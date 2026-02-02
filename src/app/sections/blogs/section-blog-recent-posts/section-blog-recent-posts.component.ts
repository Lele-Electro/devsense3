import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blog-recent-posts',
    templateUrl: './section-blog-recent-posts.component.html',
    styleUrls: ['./section-blog-recent-posts.component.scss'],
    imports: [RouterLink]
})
export class SectionBlogRecentPostsComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
