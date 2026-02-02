import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-skills1',
    templateUrl: './section-skills1.component.html',
    styleUrls: ['./section-skills1.component.scss'],
    imports: [RouterLink]
})
export class SectionSkills1Component implements OnInit {

  @Input() data: any;
  @Input() home: any;

  constructor() { }

  ngOnInit(): void {
  }

}
