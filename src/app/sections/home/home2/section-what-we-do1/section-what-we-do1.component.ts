import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-what-we-do1',
  templateUrl: './section-what-we-do1.component.html',
  styleUrls: ['./section-what-we-do1.component.css']
})
export class SectionWhatWeDo1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
