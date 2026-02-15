import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-services-sidebar',
    templateUrl: './section-services-sidebar.component.html',
    styleUrls: ['./section-services-sidebar.component.scss'],
    imports: [RouterLink]
})
export class SectionServicesSidebarComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
