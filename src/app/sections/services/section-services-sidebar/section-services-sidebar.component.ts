import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-services-sidebar',
    templateUrl: './section-services-sidebar.component.html',
    styleUrls: ['./section-services-sidebar.component.scss'],
    imports: [RouterLink]
})
export class SectionServicesSidebarComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
