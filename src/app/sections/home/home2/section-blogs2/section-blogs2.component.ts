import { Component, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

interface InsightCard {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

@Component({
  selector: 'app-section-blogs2',
  templateUrl: './section-blogs2.component.html',
  styleUrls: ['./section-blogs2.component.scss'],
  imports: [RouterLink]
})
export class SectionBlogs2Component {
  private readonly wordpress = inject(WordpressService);

  readonly data = input<unknown>();
  posts: InsightCard[] = [];

  private readonly postsEffect = effect(() => {
    this.posts = this.wordpress.fetchPostsUnderCategory(
      this.wordpress.uncategorizedPosts(),
      'category-insights'
    )
      .sort((first, second) => Date.parse(second.date) - Date.parse(first.date))
      .slice(0, 3)
      .map(post => ({
        slug: post.slug,
        title: post.title.rendered,
        description: post.excerpt.rendered,
        image: post.featured_media_src_url ?? '',
        date: new Intl.DateTimeFormat('en-ZA', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).format(new Date(post.date)),
      }));
  });

}
