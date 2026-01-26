import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-team1',
  templateUrl: './section-our-team1.component.html',
  styleUrls: ['./section-our-team1.component.css']
})
export class SectionOurTeam1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
