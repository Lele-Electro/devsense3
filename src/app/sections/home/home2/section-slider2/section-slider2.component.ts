import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, PLATFORM_ID, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';
import { HelperService } from 'src/app/services/helper.service';

declare const sx_home_bnr_2: () => void;

@Component({
  selector: 'app-section-slider2',
  templateUrl: './section-slider2.component.html',
  styleUrls: ['./section-slider2.component.scss'],
  imports: [RouterLink]
})
export class SectionSlider2Component implements AfterViewInit, OnDestroy {
  wpService = inject(WordpressService);
  private helperService = inject(HelperService);
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private sliderReinitTimer: ReturnType<typeof setTimeout> | null = null;

  hero = {
    badge: '',
    title: '',
    description: '',
    cta: '',
  };
  secondaryHero = {
    badge: '',
    title: '',
    description: '',
    cta: '',
  };

  private readonly heroEffect = effect(() => {
    const posts = this.wpService.uncategorizedPosts();
    const heroPost = posts.find(post => post.slug === 'home-hero');
    const secondaryHeroPost = posts.find(post => post.slug === 'home-hero-ai');

    if (!heroPost) {
      return;
    }

    this.hero = {
      badge: this.helperService.getParagraphText(heroPost.content.rendered, 0),
      title: heroPost.title.rendered,
      description: this.helperService.getFirstSentence(heroPost.excerpt.rendered),
      cta: this.helperService.getParagraphText(heroPost.content.rendered, 1),
    };

    if (secondaryHeroPost) {
      this.secondaryHero = {
        badge: this.helperService.getParagraphText(secondaryHeroPost.content.rendered, 0),
        title: secondaryHeroPost.title.rendered,
        description: this.helperService.getFirstSentence(secondaryHeroPost.excerpt.rendered),
        cta: this.helperService.getParagraphText(secondaryHeroPost.content.rendered, 1),
      };
    }
  });

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

  onVideoPaused(event: Event): void {
    const video = event.target as HTMLVideoElement | null;

    if (video?.isConnected && !video.ended) {
      this.playVideo(video);
    }
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
      const video = sliderContainer.querySelector(':scope > .banner-video') as HTMLVideoElement | null;
      if (video) {
        this.playVideo(video);
      }
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
