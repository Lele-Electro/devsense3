import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-services1',
    templateUrl: './section-our-services1.component.html',
    styleUrls: ['./section-our-services1.component.scss'],
    imports: [RouterLink]
})
export class SectionOurServices1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
