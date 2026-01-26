import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-clients1',
  templateUrl: './section-our-clients1.component.html',
  styleUrls: ['./section-our-clients1.component.css']
})
export class SectionOurClients1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
