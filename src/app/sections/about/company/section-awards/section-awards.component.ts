import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-awards',
    templateUrl: './section-awards.component.html',
    styleUrls: ['./section-awards.component.scss'],
    standalone: true
})
export class SectionAwardsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
