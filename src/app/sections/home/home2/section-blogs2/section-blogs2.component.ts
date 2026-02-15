import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blogs2',
    templateUrl: './section-blogs2.component.html',
    styleUrls: ['./section-blogs2.component.scss'],
    imports: [RouterLink]
})
export class SectionBlogs2Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
