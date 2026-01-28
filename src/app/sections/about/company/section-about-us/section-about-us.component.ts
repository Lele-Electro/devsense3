import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about-us',
  templateUrl: './section-about-us.component.html',
  styleUrls: ['./section-about-us.component.scss']
})
export class SectionAboutUsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
