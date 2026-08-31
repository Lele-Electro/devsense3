import { Component, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

interface Capability {
  number: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

@Component({
  selector: 'app-section-what-we-do1',
  templateUrl: './section-what-we-do1.component.html',
  styleUrls: ['./section-what-we-do1.component.scss'],
  imports: [RouterLink]
})
export class SectionWhatWeDo1Component {
  private readonly wordpress = inject(WordpressService);
  readonly data = input<unknown>();
  capabilities: Capability[] = [];

  private readonly capabilitiesEffect = effect(() => {
    const servicePosts = this.wordpress.fetchPostsUnderCategory(
      this.wordpress.uncategorizedPosts(),
      'category-services'
    );

    this.capabilities = servicePosts
      .filter(post => (post.acf?.number ?? 0) >= 3 && (post.acf?.number ?? 0) <= 8)
      .sort((first, second) => Date.parse(second.date) - Date.parse(first.date))
      .filter((post, index, posts) =>
        posts.findIndex(candidate => candidate.acf?.number === post.acf?.number) === index
      )
      .sort((first, second) => (first.acf?.number ?? 0) - (second.acf?.number ?? 0))
      .map((post, index) => ({
        number: index + 1,
        title: post.title.rendered,
        description: post.excerpt.rendered,
        image: post.featured_media_src_url ?? '',
        slug: post.slug
      }));
  });

}
