import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects1-dark',
  templateUrl: './section-projects1-dark.component.html',
  styleUrls: ['./section-projects1-dark.component.css']
})
export class SectionProjects1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
