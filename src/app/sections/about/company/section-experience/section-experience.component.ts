import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, PLATFORM_ID, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

declare const sx_team2_swiper: () => void;

// Maps a team member's first name (or known alias) to their existing team-page face photo
const TEAM_MEMBER_AVATARS: Record<string, string> = {
  antonio: 'assets/images/our-team5/toni-face.webp',
  toni: 'assets/images/our-team5/toni-face.webp',
  lebogang: 'assets/images/our-team5/toni-face.webp',
  che: 'assets/images/our-team5/che-face.webp',
  george: 'assets/images/our-team5/george-face.webp',
  mabutho: 'assets/images/our-team5/mabutho-face.webp',
};

function resolveDeveloperAvatar(teamMember: string): string | null {
  const firstName = teamMember.toLowerCase().split(/[\s(]+/)[0];
  return firstName ? TEAM_MEMBER_AVATARS[firstName] ?? null : null;
}

function resolveDeveloperAvatarKey(teamMember: string): string | null {
  const firstName = teamMember.toLowerCase().split(/[\s(]+/)[0];
  return firstName && firstName in TEAM_MEMBER_AVATARS ? firstName : null;
}

interface ExperienceProject {
  teamMember: string;
  title: string;
  description: string;
  dateRange: string;
  imageUrl: string | null;
  imageAlt: string;
  developerImageUrl: string;
  developerImageAlt: string;
}

interface ExperienceData {
  title: string;
  projects: ExperienceProject[];
}

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss'],
  imports: [RouterLink]
})
export class SectionExperienceComponent implements OnDestroy {

  readonly data = input<ExperienceData>();

  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private reinitTimer: ReturnType<typeof setTimeout> | null = null;

  private teamDataEffect = effect(() => {
    const projects = this.data()?.projects;
    if (projects?.length) {
      this.reinitializeTeamSwiper();
    }
  });

  ngOnDestroy(): void {
    if (this.reinitTimer) {
      clearTimeout(this.reinitTimer);
    }
  }

  // Falls back to a name-matched team photo when no explicit developer image is set
  developerAvatarFor(project: ExperienceProject): string | null {
    return project.developerImageUrl || resolveDeveloperAvatar(project.teamMember);
  }

  // Lets the stylesheet fine-tune the face crop per team member
  developerAvatarClass(project: ExperienceProject): string {
    const key = resolveDeveloperAvatarKey(project.teamMember);
    return key ? `sx-developer-avatar--${key}` : '';
  }

  private reinitializeTeamSwiper(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.reinitTimer) {
      clearTimeout(this.reinitTimer);
    }

    // Defer until after the @for slides have rendered
    this.reinitTimer = setTimeout(() => {
      const swiperContainer = this.document.querySelector('.sx-team2-swiper') as any;
      if (swiperContainer?.swiper && typeof swiperContainer.swiper.destroy === 'function') {
        swiperContainer.swiper.destroy(true, true);
      }

      if (typeof sx_team2_swiper === 'function') {
        sx_team2_swiper();
      }
    }, 0);
  }

}
