import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about-company1',
  templateUrl: './section-about-company1.component.html',
  styleUrls: ['./section-about-company1.component.css']
})
export class SectionAboutCompany1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
