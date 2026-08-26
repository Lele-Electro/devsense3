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

    this.initializeSliderAndVideoPlayback();
  }

  ngOnDestroy(): void {
    if (this.sliderReinitTimer) {
      clearTimeout(this.sliderReinitTimer);
    }
  }

  onVideoLoadedMetadata(event: Event): void {
    const video = event.target as HTMLVideoElement | null;

    if (!video) {
      return;
    }

    this.playVideo(video);
  }

  private initializeSliderAndVideoPlayback(retriesLeft = 12): void {
    this.sliderReinitTimer = setTimeout(() => {
      const sliderContainer = this.document.querySelector('.home-2-slider') as any;

      if (!sliderContainer || typeof sx_home_bnr_2 !== 'function') {
        if (retriesLeft > 0) {
          this.initializeSliderAndVideoPlayback(retriesLeft - 1);
        }
        return;
      }

      this.reinitializeHomeTwoSwiper();
      this.attachVideoHandlers(sliderContainer);
      this.playActiveSlideVideo(sliderContainer);
    }, 300);
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

  private attachVideoHandlers(sliderContainer: any): void {
    const swiper = sliderContainer?.swiper;

    if (!swiper || sliderContainer.dataset.videoHandlersAttached === 'true') {
      return;
    }

    swiper.on('slideChangeTransitionStart', () => {
      this.pauseAllVideos(sliderContainer);
    });

    swiper.on('slideChangeTransitionEnd', () => {
      this.playActiveSlideVideo(sliderContainer);
    });

    sliderContainer.dataset.videoHandlersAttached = 'true';
  }

  private playActiveSlideVideo(sliderContainer: Element): void {
    const activeSlide = sliderContainer.querySelector('.swiper-slide-active') as HTMLElement | null;
    const activeVideo = activeSlide?.querySelector('video') as HTMLVideoElement | null;

    if (!activeVideo) {
      return;
    }

    this.playVideo(activeVideo);
  }

  private pauseAllVideos(sliderContainer: Element): void {
    const videos = sliderContainer.querySelectorAll('video');
    videos.forEach((videoElement) => {
      const video = videoElement as HTMLVideoElement;
      video.pause();
    });
  }

  private playVideo(video: HTMLVideoElement): void {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Autoplay can still be blocked by browser policies in rare cases.
      });
    }
  }

}
