import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-clients1',
    templateUrl: './section-our-clients1.component.html',
    styleUrls: ['./section-our-clients1.component.scss'],
    imports: [RouterLink]
})
export class SectionOurClients1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
