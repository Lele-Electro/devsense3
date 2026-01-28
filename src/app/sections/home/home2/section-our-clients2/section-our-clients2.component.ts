import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-clients2',
  templateUrl: './section-our-clients2.component.html',
  styleUrls: ['./section-our-clients2.component.scss']
})
export class SectionOurClients2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
