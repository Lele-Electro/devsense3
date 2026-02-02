import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-pricing1',
    templateUrl: './section-pricing1.component.html',
    styleUrls: ['./section-pricing1.component.scss'],
    imports: [RouterLink]
})
export class SectionPricing1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
