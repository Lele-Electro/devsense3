import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-what-we-do1-dark',
  templateUrl: './section-what-we-do1-dark.component.html',
  styleUrls: ['./section-what-we-do1-dark.component.scss']
})
export class SectionWhatWeDo1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
