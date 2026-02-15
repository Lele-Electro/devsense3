import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-blog-tags',
    templateUrl: './section-blog-tags.component.html',
    styleUrls: ['./section-blog-tags.component.scss'],
    standalone: true
})
export class SectionBlogTagsComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
