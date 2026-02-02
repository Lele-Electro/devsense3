import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-blog-tags',
    templateUrl: './section-blog-tags.component.html',
    styleUrls: ['./section-blog-tags.component.scss'],
    standalone: true
})
export class SectionBlogTagsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
