import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects2',
  templateUrl: './section-projects2.component.html',
  styleUrls: ['./section-projects2.component.css']
})
export class SectionProjects2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
