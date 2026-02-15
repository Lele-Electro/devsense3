import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-our-clients2-dark',
    templateUrl: './section-our-clients2-dark.component.html',
    styleUrls: ['./section-our-clients2-dark.component.scss'],
    standalone: false
})
export class SectionOurClients2DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
