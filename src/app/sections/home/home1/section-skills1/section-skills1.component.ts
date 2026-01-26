import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-skills1',
  templateUrl: './section-skills1.component.html',
  styleUrls: ['./section-skills1.component.css']
})
export class SectionSkills1Component implements OnInit {

  @Input() data: any;
  @Input() home: any;

  constructor() { }

  ngOnInit(): void {
  }

}
