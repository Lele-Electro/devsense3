import { Component, OnDestroy, OnInit, input } from '@angular/core';

declare var jQuery: any;
declare var loadSlider2: any;
declare var killSlider2: any;

@Component({
    selector: 'app-section-slider2-dark',
    templateUrl: './section-slider2-dark.component.html',
    styleUrls: ['./section-slider2-dark.component.scss'],
    standalone: false
})
export class SectionSlider2DarkComponent implements OnInit, OnDestroy {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      setTimeout(() => {
        loadSlider2();
      }, 500);
    })(jQuery);
  }

  ngOnDestroy(): void {
    killSlider2();
    console.log("distroyed home 2 dark slider")
  }

}
