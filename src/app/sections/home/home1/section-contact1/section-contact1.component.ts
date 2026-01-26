import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-contact1',
  templateUrl: './section-contact1.component.html',
  styleUrls: ['./section-contact1.component.css']
})
export class SectionContact1Component implements OnInit {

  @Input() data: any; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
