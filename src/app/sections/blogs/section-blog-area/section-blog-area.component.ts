import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-area',
  templateUrl: './section-blog-area.component.html',
  styleUrls: ['./section-blog-area.component.scss']
})
export class SectionBlogAreaComponent implements OnInit {

  @Input() blog: any;
  @Input() padding: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
