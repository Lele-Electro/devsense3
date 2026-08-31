import { Component, effect, inject } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';
import { WordpressService } from '../../../services/wordpress.service';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  image: string;
}

type ProcessItem =
  | { type: 'image'; image: string }
  | { type: 'data'; serial: string; title: string; description: string };

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Scope and process capture',
    description: 'We document the work as it is done today &mdash; volumes, tools, SLAs, escalation rules and the edge cases your current team keeps in their heads.',
    image: 'assets/images/our-process/scope-process-capture.jpg'
  },
  {
    number: 2,
    title: 'Team selection and onboarding',
    description: 'We recruit or assign against your profile, run security and reference checks, and train the team on your systems with your material.',
    image: 'assets/images/our-process/team-onboarding-south-africa.jpg'
  },
  {
    number: 3,
    title: 'Shadow and pilot',
    description: 'The team works alongside yours on live volume with every output reviewed, until quality metrics hold steady for a full cycle.',
    image: 'assets/images/our-process/shadow-pilot.jpg'
  },
  {
    number: 4,
    title: 'Live, measured and reported',
    description: 'Full handover against agreed SLAs, with a named account lead, a monthly performance report and a quarterly review of what to automate next.',
    image: 'assets/images/our-process/live-reporting.jpg'
  }
];

const createProcessItems = (steps: ProcessStep[]): ProcessItem[] => [
  ...steps.flatMap(step => [
    { type: 'image' as const, image: step.image },
    {
      type: 'data' as const,
      serial: step.number.toString().padStart(2, '0'),
      title: step.title,
      description: step.description
    }
  ]),
  { type: 'image', image: 'assets/images/our-process/happy-client-handshake.jpg' }
];

@Component({
  selector: 'app-page-our-process',
  templateUrl: './page-our-process.component.html',
  styleUrls: ['./page-our-process.component.scss'],
  imports: [Header2Component, BannerComponent, Footer1Component]
})
export class PageOurProcessComponent {
  private readonly wordpress = inject(WordpressService);

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Our Process",
    currentPage: "Our Process",
    description: "From the first call to a live team, every stage is scoped, measured and accountable."
  };

  process: ProcessItem[] = createProcessItems(DEFAULT_PROCESS_STEPS);

  private readonly processEffect = effect(() => {
    const processPosts = this.wordpress.fetchPostsUnderCategory(
      this.wordpress.uncategorizedPosts(),
      'category-our-process'
    );

    if (!processPosts.length) {
      return;
    }

    const steps = processPosts
      .filter(post => (post.acf?.number ?? 0) > 0)
      .sort((first, second) => (first.acf?.number ?? 0) - (second.acf?.number ?? 0))
      .map(post => {
        const number = post.acf?.number ?? 0;
        const fallback = DEFAULT_PROCESS_STEPS.find(step => step.number === number);

        return {
          number,
          title: post.title.rendered,
          description: post.excerpt.rendered,
          image: post.imageUrl ?? post.featured_media_src_url ?? fallback?.image ?? ''
        };
      });

    if (steps.length) {
      this.process = createProcessItems(steps);
    }
  });
}
