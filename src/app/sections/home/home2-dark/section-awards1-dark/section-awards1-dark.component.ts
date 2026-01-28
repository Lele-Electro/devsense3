import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-awards1-dark',
  templateUrl: './section-awards1-dark.component.html',
  styleUrls: ['./section-awards1-dark.component.scss']
})
export class SectionAwards1DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
