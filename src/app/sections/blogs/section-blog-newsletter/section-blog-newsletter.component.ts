import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-blog-newsletter',
    templateUrl: './section-blog-newsletter.component.html',
    styleUrls: ['./section-blog-newsletter.component.scss'],
    standalone: true
})
export class SectionBlogNewsletterComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
