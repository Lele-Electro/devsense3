import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-our-process1',
    templateUrl: './section-our-process1.component.html',
    styleUrls: ['./section-our-process1.component.scss'],
    imports: [RouterLink]
})
export class SectionOurProcess1Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
