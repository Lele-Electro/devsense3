import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-blog-search',
    templateUrl: './section-blog-search.component.html',
    styleUrls: ['./section-blog-search.component.scss'],
    standalone: true
})
export class SectionBlogSearchComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
