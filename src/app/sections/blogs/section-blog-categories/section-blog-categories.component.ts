import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-categories',
  templateUrl: './section-blog-categories.component.html',
  styleUrls: ['./section-blog-categories.component.css']
})
export class SectionBlogCategoriesComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
