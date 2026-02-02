import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-counter2',
    templateUrl: './section-counter2.component.html',
    styleUrls: ['./section-counter2.component.scss'],
    standalone: true
})
export class SectionCounter2Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
