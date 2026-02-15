import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-what-we-do1-dark',
    templateUrl: './section-what-we-do1-dark.component.html',
    styleUrls: ['./section-what-we-do1-dark.component.scss'],
    standalone: false
})
export class SectionWhatWeDo1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
