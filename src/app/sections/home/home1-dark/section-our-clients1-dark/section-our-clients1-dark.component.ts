import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-our-clients1-dark',
    templateUrl: './section-our-clients1-dark.component.html',
    styleUrls: ['./section-our-clients1-dark.component.scss'],
    standalone: false
})
export class SectionOurClients1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
