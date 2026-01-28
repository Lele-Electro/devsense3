import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-comments',
  templateUrl: './section-blog-comments.component.html',
  styleUrls: ['./section-blog-comments.component.scss']
})
export class SectionBlogCommentsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
