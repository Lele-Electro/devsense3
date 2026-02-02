import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-our-clients1-dark',
    templateUrl: './section-our-clients1-dark.component.html',
    styleUrls: ['./section-our-clients1-dark.component.scss'],
    standalone: false
})
export class SectionOurClients1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
