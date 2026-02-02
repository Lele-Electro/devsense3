import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blog-categories',
    templateUrl: './section-blog-categories.component.html',
    styleUrls: ['./section-blog-categories.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class SectionBlogCategoriesComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
