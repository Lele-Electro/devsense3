import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-blog-newsletter',
    templateUrl: './section-blog-newsletter.component.html',
    styleUrls: ['./section-blog-newsletter.component.scss'],
    standalone: true
})
export class SectionBlogNewsletterComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
