import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-blogs1-dark',
    templateUrl: './section-blogs1-dark.component.html',
    styleUrls: ['./section-blogs1-dark.component.scss'],
    standalone: false
})
export class SectionBlogs1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
