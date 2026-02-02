import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-our-team1-dark',
    templateUrl: './section-our-team1-dark.component.html',
    styleUrls: ['./section-our-team1-dark.component.scss'],
    standalone: false
})
export class SectionOurTeam1DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
