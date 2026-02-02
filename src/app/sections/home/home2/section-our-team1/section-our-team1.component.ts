import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-team1',
    templateUrl: './section-our-team1.component.html',
    styleUrls: ['./section-our-team1.component.scss'],
    imports: [RouterLink]
})
export class SectionOurTeam1Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
