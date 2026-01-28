import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects1',
  templateUrl: './section-projects1.component.html',
  styleUrls: ['./section-projects1.component.scss']
})
export class SectionProjects1Component implements OnInit {

  @Input() data: any; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
