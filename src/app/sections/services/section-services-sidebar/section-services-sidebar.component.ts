import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services-sidebar',
  templateUrl: './section-services-sidebar.component.html',
  styleUrls: ['./section-services-sidebar.component.css']
})
export class SectionServicesSidebarComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
