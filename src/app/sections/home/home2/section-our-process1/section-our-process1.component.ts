import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';
import { HelperService } from 'src/app/services/helper.service';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-section-our-process1',
  templateUrl: './section-our-process1.component.html',
  styleUrls: ['./section-our-process1.component.scss'],
  imports: [RouterLink]
})
export class SectionOurProcess1Component {
  private readonly wordpress = inject(WordpressService);
  private readonly helperService = inject(HelperService);

  eyebrow = '';
  title = '';
  description = '';
  steps: ProcessStep[] = [];

  private readonly processEffect = effect(() => {
    const processPosts = this.wordpress.fetchPostsUnderCategory(
      this.wordpress.uncategorizedPosts(),
      'category-process'
    );
    const intro = processPosts.find(post => post.slug === 'home-process-intro');

    if (intro) {
      this.eyebrow = this.helperService.getParagraphText(intro.content.rendered);
      this.title = intro.title.rendered;
      this.description = intro.excerpt.rendered;
    }

    this.steps = processPosts
      .filter(post => /^home-process-\d{2}-/.test(post.slug))
      .sort((first, second) => first.slug.localeCompare(second.slug))
      .map(post => ({
        number: post.slug.match(/^home-process-(\d{2})-/)?.[1] ?? '',
        title: post.title.rendered,
        description: post.excerpt.rendered,
      }));
  });

}
