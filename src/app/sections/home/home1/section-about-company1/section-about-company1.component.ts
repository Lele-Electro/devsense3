import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-about-company1',
    templateUrl: './section-about-company1.component.html',
    styleUrls: ['./section-about-company1.component.scss'],
    imports: [RouterLink]
})
export class SectionAboutCompany1Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
