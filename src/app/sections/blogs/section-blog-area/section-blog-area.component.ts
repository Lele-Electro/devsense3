import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blog-area',
    templateUrl: './section-blog-area.component.html',
    styleUrls: ['./section-blog-area.component.scss'],
    imports: [RouterLink]
})
export class SectionBlogAreaComponent implements OnInit {

  @Input() blog: any;
  @Input() padding: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
