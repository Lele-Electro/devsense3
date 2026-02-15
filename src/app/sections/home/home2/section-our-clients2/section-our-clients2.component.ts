import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-clients2',
    templateUrl: './section-our-clients2.component.html',
    styleUrls: ['./section-our-clients2.component.scss'],
    imports: [RouterLink]
})
export class SectionOurClients2Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
