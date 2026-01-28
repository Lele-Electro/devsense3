import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about-company2',
  templateUrl: './section-about-company2.component.html',
  styleUrls: ['./section-about-company2.component.scss']
})
export class SectionAboutCompany2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
