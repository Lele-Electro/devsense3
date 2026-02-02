import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-blogs2',
    templateUrl: './section-blogs2.component.html',
    styleUrls: ['./section-blogs2.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class SectionBlogs2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
