import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-recent-posts',
  templateUrl: './section-blog-recent-posts.component.html',
  styleUrls: ['./section-blog-recent-posts.component.css']
})
export class SectionBlogRecentPostsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
