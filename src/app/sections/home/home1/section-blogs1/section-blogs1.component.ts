import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blogs1',
    templateUrl: './section-blogs1.component.html',
    styleUrls: ['./section-blogs1.component.scss'],
    imports: [RouterLink]
})
export class SectionBlogs1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
