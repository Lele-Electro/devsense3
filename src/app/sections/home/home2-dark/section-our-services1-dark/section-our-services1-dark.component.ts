import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-our-services1-dark',
    templateUrl: './section-our-services1-dark.component.html',
    styleUrls: ['./section-our-services1-dark.component.scss'],
    standalone: false
})
export class SectionOurServices1DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
