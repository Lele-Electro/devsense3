import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-slider2',
    templateUrl: './section-slider2.component.html',
    styleUrls: ['./section-slider2.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class SectionSlider2Component {

  @Input() data: any;
  
  constructor() { }

}
