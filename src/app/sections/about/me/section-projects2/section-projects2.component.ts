import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-projects2',
    templateUrl: './section-projects2.component.html',
    styleUrls: ['./section-projects2.component.scss'],
    standalone: true
})
export class SectionProjects2Component implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
