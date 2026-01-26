import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-pricing1-dark',
  templateUrl: './section-pricing1-dark.component.html',
  styleUrls: ['./section-pricing1-dark.component.css']
})
export class SectionPricing1DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
