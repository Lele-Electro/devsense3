import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-awards',
    templateUrl: './section-awards.component.html',
    styleUrls: ['./section-awards.component.scss'],
    standalone: true
})
export class SectionAwardsComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
