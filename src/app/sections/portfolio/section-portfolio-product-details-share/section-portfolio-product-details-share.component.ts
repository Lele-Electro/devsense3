import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-portfolio-product-details-share',
    templateUrl: './section-portfolio-product-details-share.component.html',
    styleUrls: ['./section-portfolio-product-details-share.component.scss'],
    standalone: true
})
export class SectionPortfolioProductDetailsShareComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
