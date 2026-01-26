import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-clients3',
  templateUrl: './section-our-clients3.component.html',
  styleUrls: ['./section-our-clients3.component.css']
})
export class SectionOurClients3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
