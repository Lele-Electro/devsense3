import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, PLATFORM_ID, QueryList, ViewChildren, inject } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';

interface TeamMember {
  image: string;
  hoverImage?: string;
  isHovered?: boolean;
  isInView?: boolean;
  subtleHoverZoom?: boolean;
  name: string;
  designation: string;
  introduction: string;
}

@Component({
  selector: 'app-page-team1',
  templateUrl: './page-team1.component.html',
  styleUrls: ['./page-team1.component.scss'],
  imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageTeam1Component implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('teamCard') private teamCards!: QueryList<ElementRef<HTMLElement>>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private mobileMediaQuery?: MediaQueryList;
  private visibilityAnimationFrame?: number;

  private readonly scheduleCardVisibilityUpdate = (): void => {
    if (this.visibilityAnimationFrame !== undefined) {
      return;
    }

    this.visibilityAnimationFrame = window.requestAnimationFrame(() => {
      this.visibilityAnimationFrame = undefined;
      this.updateCardVisibility();
    });
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)');
    this.mobileMediaQuery.addEventListener('change', this.scheduleCardVisibilityUpdate);
    window.addEventListener('scroll', this.scheduleCardVisibilityUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleCardVisibilityUpdate, { passive: true });
    this.updateCardVisibility();
  }

  ngOnDestroy(): void {
    this.mobileMediaQuery?.removeEventListener('change', this.scheduleCardVisibilityUpdate);

    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scheduleCardVisibilityUpdate);
      window.removeEventListener('resize', this.scheduleCardVisibilityUpdate);

      if (this.visibilityAnimationFrame !== undefined) {
        window.cancelAnimationFrame(this.visibilityAnimationFrame);
      }
    }
  }

  setHovered(member: TeamMember, isHovered: boolean): void {
    if (!this.mobileMediaQuery?.matches) {
      member.isHovered = isHovered;
    }
  }

  private updateCardVisibility(): void {
    if (!this.mobileMediaQuery?.matches) {
      const hadActiveCard = this.team.some(member => member.isInView);
      this.team.forEach(member => member.isInView = false);

      if (hadActiveCard) {
        this.changeDetectorRef.detectChanges();
      }

      return;
    }

    const cards = this.teamCards.toArray();
    let stateChanged = false;

    cards.forEach((card, cardIndex) => {
      const member = this.team[cardIndex];
      const cardBounds = card.nativeElement.getBoundingClientRect();
      const visibleHeight = Math.max(
        0,
        Math.min(cardBounds.bottom, window.innerHeight) -
        Math.max(cardBounds.top, 0)
      );
      const visibleRatio = cardBounds.height > 0
        ? visibleHeight / cardBounds.height
        : 0;
      const topPastPixels = Math.max(0, -cardBounds.top);
      const isInView = visibleRatio >= 0.5 && topPastPixels < 5;

      if (member && member.isInView !== isInView) {
        member.isInView = isInView;
        stateChanged = true;
      }
    });

    if (stateChanged) {
      this.changeDetectorRef.detectChanges();
    }
  }

  banner = {
    background: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/devsense-team-office-768x576.png",
    title: "Our Experts",
    currentPage: "Team",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  team: TeamMember[] = [
    {
      image: "assets/images/our-team5/che-face.webp",
      hoverImage: "assets/images/our-team5/che-face-on-hover.webp",
      name: "Che Ribeiro",
      designation: "Devsense Business",
      introduction: "Let's get you connected"
    },

    {
      image: "assets/images/our-team5/george-face.webp",
      hoverImage: "assets/images/our-team5/george-face-on-hover.webp",
      subtleHoverZoom: true,
      name: "George Mathew",
      designation: "Devsense Business",
      introduction: "how about we bring your idea to life"
    },
    {
      image: "assets/images/our-team5/toni-face.webp",
      hoverImage: "assets/images/our-team5/toni-face-on-hover.webp",
      name: "Toni (Lebogang) Ribeiro",
      designation: "Devsense Tech",
      introduction: "Interactivity with your idea is what really counts"
    },
    {
      image: "assets/images/our-team5/marothi-face.webp",
      hoverImage: "assets/images/our-team5/marothi-face-on-hover.webp",
      subtleHoverZoom: true,
      name: "Marothi Mahlake",
      designation: "Devsense Tech",
      introduction: "Industry leading functionality at your fingertips"
    },
    {
      image: "assets/images/our-team5/5.jpg",
      name: "Johnny Jackman",
      designation: "Co-Founder, Devsense. Media",
      introduction: "Lorem ipsum dolor sit amet"
    },
    {
      image: "assets/images/our-team5/6.jpg",
      name: "Daniel Rickman",
      designation: "CEO, Devsense. Media",
            introduction: "Lorem ipsum dolor sit amet"
    },
    {
      image: "assets/images/our-team5/7.jpg",
      name: "Mark Norwich",
      designation: "Co-Founder, Devsense. Media",
            introduction: "Lorem ipsum dolor sit amet"
    },
    {
      image: "assets/images/our-team5/8.jpg",
      name: "Nich Jonas",
      designation: "CEO, Devsense. Media",
            introduction: "Lorem ipsum dolor sit amet"
    }
  ]
}
