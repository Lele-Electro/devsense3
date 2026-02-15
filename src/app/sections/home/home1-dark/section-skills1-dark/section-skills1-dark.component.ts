import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-skills1-dark',
    templateUrl: './section-skills1-dark.component.html',
    styleUrls: ['./section-skills1-dark.component.scss'],
    standalone: false
})
export class SectionSkills1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
