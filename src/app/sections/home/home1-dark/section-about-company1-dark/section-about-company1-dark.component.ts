import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about-company1-dark',
  templateUrl: './section-about-company1-dark.component.html',
  styleUrls: ['./section-about-company1-dark.component.scss']
})
export class SectionAboutCompany1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
