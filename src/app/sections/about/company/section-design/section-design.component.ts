import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-design',
    templateUrl: './section-design.component.html',
    styleUrls: ['./section-design.component.scss'],
    imports: [RouterLink]
})
export class SectionDesignComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
