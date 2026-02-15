import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-services2',
    templateUrl: './section-our-services2.component.html',
    styleUrls: ['./section-our-services2.component.scss'],
    imports: [RouterLink]
})
export class SectionOurServices2Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
