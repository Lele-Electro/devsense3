import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs1',
  templateUrl: './section-blogs1.component.html',
  styleUrls: ['./section-blogs1.component.css']
})
export class SectionBlogs1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
