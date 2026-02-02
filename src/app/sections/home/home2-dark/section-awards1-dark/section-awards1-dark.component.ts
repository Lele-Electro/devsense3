import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-awards1-dark',
    templateUrl: './section-awards1-dark.component.html',
    styleUrls: ['./section-awards1-dark.component.scss'],
    standalone: false
})
export class SectionAwards1DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
