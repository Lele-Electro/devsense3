import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-design',
  templateUrl: './section-design.component.html',
  styleUrls: ['./section-design.component.scss']
})
export class SectionDesignComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
