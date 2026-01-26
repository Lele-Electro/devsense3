import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-awards1',
  templateUrl: './section-awards1.component.html',
  styleUrls: ['./section-awards1.component.css']
})
export class SectionAwards1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
