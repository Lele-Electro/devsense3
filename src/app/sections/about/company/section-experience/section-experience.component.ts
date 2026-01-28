import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss']
})
export class SectionExperienceComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
