import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-service-detail-area',
    templateUrl: './section-service-detail-area.component.html',
    styleUrls: ['./section-service-detail-area.component.scss'],
    standalone: true
})
export class SectionServiceDetailAreaComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
