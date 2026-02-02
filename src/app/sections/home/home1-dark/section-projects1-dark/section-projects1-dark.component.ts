import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-projects1-dark',
    templateUrl: './section-projects1-dark.component.html',
    styleUrls: ['./section-projects1-dark.component.scss'],
    standalone: false
})
export class SectionProjects1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
