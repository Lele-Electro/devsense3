import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-service-detail-area',
  templateUrl: './section-service-detail-area.component.html',
  styleUrls: ['./section-service-detail-area.component.css']
})
export class SectionServiceDetailAreaComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
