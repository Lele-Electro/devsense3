import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-counter1-dark',
  templateUrl: './section-counter1-dark.component.html',
  styleUrls: ['./section-counter1-dark.component.scss']
})
export class SectionCounter1DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
