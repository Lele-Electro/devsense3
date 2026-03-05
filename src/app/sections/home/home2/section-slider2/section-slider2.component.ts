import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, PLATFORM_ID, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

declare const sx_home_bnr_2: () => void;

@Component({
  selector: 'app-section-slider2',
  templateUrl: './section-slider2.component.html',
  styleUrls: ['./section-slider2.component.scss'],
  imports: [RouterLink]
})
export class SectionSlider2Component implements AfterViewInit, OnDestroy {
  wpService = inject(WordpressService);
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private sliderReinitTimer: ReturnType<typeof setTimeout> | null = null;

  readonly data = input<any>();

  constructor() { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.sliderReinitTimer = setTimeout(() => {
      this.reinitializeHomeTwoSwiper();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.sliderReinitTimer) {
      clearTimeout(this.sliderReinitTimer);
    }
  }

  private reinitializeHomeTwoSwiper(): void {
    const sliderContainer = this.document.querySelector('.home-2-slider') as any;

    if (sliderContainer?.swiper && typeof sliderContainer.swiper.destroy === 'function') {
      sliderContainer.swiper.destroy(true, true);
    }

    if (typeof sx_home_bnr_2 === 'function') {
      sx_home_bnr_2();
    }
  }

}
