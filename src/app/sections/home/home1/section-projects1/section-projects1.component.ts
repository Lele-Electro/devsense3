import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import { PortfolioCategory } from 'src/app/interfaces/website-content';
import { WordpressService } from 'src/app/services/wordpress.service';

declare const home_projects_filter: () => void;
declare const jQuery: any;

@Component({
  selector: 'app-section-projects1',
  templateUrl: './section-projects1.component.html',
  styleUrls: ['./section-projects1.component.scss'],
  standalone: true
})
export class SectionProjects1Component implements OnInit, AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  wpService = inject(WordpressService);
  private carouselReinitTimer: ReturnType<typeof setTimeout> | null = null;

  readonly data = input<any>();
  portfoloCategories: PortfolioCategory[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.carouselReinitTimer = setTimeout(() => {
      this.reinitializeProjectsCarousel();
    }, 2000);




  }

  ngOnDestroy(): void {
    if (this.carouselReinitTimer) {
      clearTimeout(this.carouselReinitTimer);
    }
  }

  private reinitializeProjectsCarousel(): void {
    const carouselElement = this.document.querySelector('.owl-carousel-filter');
    if (!carouselElement) {
      return;
    }

    const carousel = jQuery(carouselElement);
    if (carousel?.hasClass('owl-loaded')) {
      carousel.trigger('destroy.owl.carousel');
      carousel.removeClass('owl-loaded owl-hidden');
      carousel.find('.owl-stage-outer').children().unwrap();
    }

    jQuery('.btn-filter-wrap').off('click', '.btn-filter');

    if (typeof home_projects_filter === 'function') {
      home_projects_filter();
    }
  }

}
