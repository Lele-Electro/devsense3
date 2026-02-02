import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-services1',
    templateUrl: './section-our-services1.component.html',
    styleUrls: ['./section-our-services1.component.scss'],
    imports: [RouterLink]
})
export class SectionOurServices1Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
