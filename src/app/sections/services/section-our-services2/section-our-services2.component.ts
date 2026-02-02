import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-services2',
    templateUrl: './section-our-services2.component.html',
    styleUrls: ['./section-our-services2.component.scss'],
    imports: [RouterLink]
})
export class SectionOurServices2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
