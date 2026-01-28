import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blogs1-dark',
  templateUrl: './section-blogs1-dark.component.html',
  styleUrls: ['./section-blogs1-dark.component.scss']
})
export class SectionBlogs1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
