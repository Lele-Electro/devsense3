import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-awards1',
    templateUrl: './section-awards1.component.html',
    styleUrls: ['./section-awards1.component.scss'],
    standalone: true
})
export class SectionAwards1Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
