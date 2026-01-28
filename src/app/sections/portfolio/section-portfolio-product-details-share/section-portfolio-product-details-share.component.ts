import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-portfolio-product-details-share',
  templateUrl: './section-portfolio-product-details-share.component.html',
  styleUrls: ['./section-portfolio-product-details-share.component.scss']
})
export class SectionPortfolioProductDetailsShareComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
