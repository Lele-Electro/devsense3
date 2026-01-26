import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-skills1-dark',
  templateUrl: './section-skills1-dark.component.html',
  styleUrls: ['./section-skills1-dark.component.css']
})
export class SectionSkills1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
