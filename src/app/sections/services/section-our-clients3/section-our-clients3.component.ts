import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-clients3',
    templateUrl: './section-our-clients3.component.html',
    styleUrls: ['./section-our-clients3.component.scss'],
    imports: [RouterLink]
})
export class SectionOurClients3Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
