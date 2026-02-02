import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-our-process1-dark',
    templateUrl: './section-our-process1-dark.component.html',
    styleUrls: ['./section-our-process1-dark.component.scss'],
    standalone: false
})
export class SectionOurProcess1DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
