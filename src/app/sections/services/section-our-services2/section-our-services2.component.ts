import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-services2',
  templateUrl: './section-our-services2.component.html',
  styleUrls: ['./section-our-services2.component.scss']
})
export class SectionOurServices2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
