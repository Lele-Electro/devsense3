import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blog-recent-posts',
    templateUrl: './section-blog-recent-posts.component.html',
    styleUrls: ['./section-blog-recent-posts.component.scss'],
    imports: [RouterLink]
})
export class SectionBlogRecentPostsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
