import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-search',
  templateUrl: './section-blog-search.component.html',
  styleUrls: ['./section-blog-search.component.css']
})
export class SectionBlogSearchComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
