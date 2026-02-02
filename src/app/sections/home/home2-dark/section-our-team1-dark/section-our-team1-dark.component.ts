import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-our-team1-dark',
    templateUrl: './section-our-team1-dark.component.html',
    styleUrls: ['./section-our-team1-dark.component.scss'],
    standalone: false
})
export class SectionOurTeam1DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
