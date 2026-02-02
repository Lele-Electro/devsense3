import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-experience',
    templateUrl: './section-experience.component.html',
    styleUrls: ['./section-experience.component.scss'],
    imports: [RouterLink]
})
export class SectionExperienceComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
