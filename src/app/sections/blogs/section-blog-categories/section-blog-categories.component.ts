import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blog-categories',
    templateUrl: './section-blog-categories.component.html',
    styleUrls: ['./section-blog-categories.component.scss'],
    imports: [RouterLink]
})
export class SectionBlogCategoriesComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
