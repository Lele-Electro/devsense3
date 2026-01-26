import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-counter1',
  templateUrl: './section-counter1.component.html',
  styleUrls: ['./section-counter1.component.css']
})
export class SectionCounter1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
