import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs2',
  templateUrl: './section-blogs2.component.html',
  styleUrls: ['./section-blogs2.component.css']
})
export class SectionBlogs2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
