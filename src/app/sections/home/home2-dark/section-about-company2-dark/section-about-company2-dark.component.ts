import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-about-company2-dark',
    templateUrl: './section-about-company2-dark.component.html',
    styleUrls: ['./section-about-company2-dark.component.scss'],
    standalone: false
})
export class SectionAboutCompany2DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
