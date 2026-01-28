import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-slider2',
  templateUrl: './section-slider2.component.html',
  styleUrls: ['./section-slider2.component.scss']
})
export class SectionSlider2Component {

  @Input() data: any;
  
  constructor() { }

}
