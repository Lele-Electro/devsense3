import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-sidebar',
  templateUrl: './section-blog-sidebar.component.html',
  styleUrls: ['./section-blog-sidebar.component.css']
})
export class SectionBlogSidebarComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
