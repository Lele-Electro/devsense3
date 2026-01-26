import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-pricing1',
  templateUrl: './section-pricing1.component.html',
  styleUrls: ['./section-pricing1.component.css']
})
export class SectionPricing1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
