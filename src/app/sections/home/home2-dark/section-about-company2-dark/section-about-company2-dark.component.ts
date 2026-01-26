import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about-company2-dark',
  templateUrl: './section-about-company2-dark.component.html',
  styleUrls: ['./section-about-company2-dark.component.css']
})
export class SectionAboutCompany2DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
