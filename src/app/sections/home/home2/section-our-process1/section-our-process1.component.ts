import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-process1',
  templateUrl: './section-our-process1.component.html',
  styleUrls: ['./section-our-process1.component.css']
})
export class SectionOurProcess1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
