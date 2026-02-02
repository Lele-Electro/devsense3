import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-about-us',
    templateUrl: './section-about-us.component.html',
    styleUrls: ['./section-about-us.component.scss'],
    standalone: true
})
export class SectionAboutUsComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
