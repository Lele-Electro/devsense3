import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-blogs2-dark',
    templateUrl: './section-blogs2-dark.component.html',
    styleUrls: ['./section-blogs2-dark.component.scss'],
    standalone: false
})
export class SectionBlogs2DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
