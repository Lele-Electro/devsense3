import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-about-company1-dark',
    templateUrl: './section-about-company1-dark.component.html',
    styleUrls: ['./section-about-company1-dark.component.scss'],
    standalone: false
})
export class SectionAboutCompany1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
