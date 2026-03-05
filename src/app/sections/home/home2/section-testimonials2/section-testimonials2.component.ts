import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, PLATFORM_ID, effect, inject, input, signal } from '@angular/core';
import { TestimonialQuote } from 'src/app/interfaces/website-content';
import { HelperService } from 'src/app/services/helper.service';
import { WordpressService } from 'src/app/services/wordpress.service';

declare const testimonial_home_two: () => void;

@Component({
  selector: 'app-section-testimonials2',
  templateUrl: './section-testimonials2.component.html',
  styleUrls: ['./section-testimonials2.component.scss'],
  standalone: true
})
export class SectionTestimonials2Component implements OnDestroy {
  wpService = inject(WordpressService);
  helperService = inject(HelperService);
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);

  readonly data = input<any>();
  testimonials: TestimonialQuote[] = [];
  renderTestimonialsReady = signal(false);
  private renderDelayTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() { }

  private uncategorizedPostsEffect = effect(() => {
    const wpPosts = this.wpService.uncategorizedPosts();
    const data = this.wpService.fetchPostsUnderCategory(wpPosts, 'category-testimonials');

    this.testimonials = data.map((post: any) => ({
      name: post.title.rendered,
      quote: post.content.rendered,
      image: post.imageUrl ?? 'assets/images/testimonials/anonymous-user.png',
      designation: null as any
    }));

    this.renderTestimonialsReady.set(false);
    if (this.renderDelayTimer) {
      clearTimeout(this.renderDelayTimer);
    }

    if (this.testimonials.length > 0) {
      this.renderDelayTimer = setTimeout(() => {
        this.renderTestimonialsReady.set(true);
        this.reinitializeTestimonialsSwiper();
      }, 3000);
    }

    this.helperService.log(this.testimonials, 'Final Testimonial Quotes:', '  #667eea', '#764ba2', '#fff');
  });

  ngOnDestroy(): void {
    if (this.renderDelayTimer) {
      clearTimeout(this.renderDelayTimer);
    }
  }

  private reinitializeTestimonialsSwiper(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const swiperContainer = this.document.querySelector('.testimonial-home-two') as any;
    if (swiperContainer?.swiper && typeof swiperContainer.swiper.destroy === 'function') {
      swiperContainer.swiper.destroy(true, true);
    }

    setTimeout(() => {
      if (typeof testimonial_home_two === 'function') {
        testimonial_home_two();
      }
    }, 0);
  }


}

