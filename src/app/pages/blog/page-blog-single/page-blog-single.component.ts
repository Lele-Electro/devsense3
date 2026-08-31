import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WPPost } from 'src/app/interfaces/wordpress';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

@Component({
  selector: 'app-page-blog-single',
  templateUrl: './page-blog-single.component.html',
  styleUrls: ['./page-blog-single.component.scss'],
  imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageBlogSingleComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly wordpress = inject(WordpressService);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  isLoading = true;
  post: WPPost | null = null;
  publishedDate = '';
  banner = {
    background: 'assets/images/banner/1.jpg',
    title: 'Insights',
    currentPage: 'Insights',
    description: ''
  };

  private readonly postEffect = effect(() => {
    const posts = this.wordpress.uncategorizedPosts();
    const post = posts.find(candidate => candidate.slug === this.slug) ?? null;

    if (!posts.length) {
      return;
    }

    this.post = post;
    this.isLoading = false;

    if (!post) {
      return;
    }

    this.publishedDate = new Intl.DateTimeFormat('en-ZA', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(new Date(post.date));
    this.banner = {
      background: post.featured_media_src_url ?? 'assets/images/banner/1.jpg',
      title: post.title.rendered,
      currentPage: 'Insights',
      description: post.excerpt.rendered
    };
  });
}