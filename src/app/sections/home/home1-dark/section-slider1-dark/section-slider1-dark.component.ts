import { Component, Input, OnInit, OnDestroy } from '@angular/core';

declare var jQuery: any;
declare var loadSlider1: any;
declare var killSlider1: any;

@Component({
  selector: 'app-section-slider1-dark',
  templateUrl: './section-slider1-dark.component.html',
  styleUrls: ['./section-slider1-dark.component.scss']
})
export class SectionSlider1DarkComponent implements OnInit, OnDestroy {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
    (function ($) {
      setTimeout(() => {
        loadSlider1();
      }, 500);
    })(jQuery);
  }

  ngOnDestroy(): void {
    killSlider1();
    console.log("distroyed home 1 dark slider")
  }
}
