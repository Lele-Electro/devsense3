import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-pricing1-dark',
    templateUrl: './section-pricing1-dark.component.html',
    styleUrls: ['./section-pricing1-dark.component.scss'],
    standalone: false
})
export class SectionPricing1DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
