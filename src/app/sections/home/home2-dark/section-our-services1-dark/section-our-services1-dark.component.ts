import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-services1-dark',
  templateUrl: './section-our-services1-dark.component.html',
  styleUrls: ['./section-our-services1-dark.component.scss']
})
export class SectionOurServices1DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
