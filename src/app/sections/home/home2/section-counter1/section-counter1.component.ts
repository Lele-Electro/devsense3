import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-counter1',
    templateUrl: './section-counter1.component.html',
    styleUrls: ['./section-counter1.component.scss'],
    standalone: true
})
export class SectionCounter1Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
