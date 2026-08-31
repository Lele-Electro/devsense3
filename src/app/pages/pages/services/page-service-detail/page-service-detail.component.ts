import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionServiceDetailAreaComponent } from '../../../../sections/services/section-service-detail-area/section-service-detail-area.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';
import { WPPost } from '../../../../interfaces/wordpress';
import { WordpressService } from '../../../../services/wordpress.service';

@Component({
  selector: 'app-page-service-detail',
  templateUrl: './page-service-detail.component.html',
  styleUrls: ['./page-service-detail.component.scss'],
  imports: [Header2Component, BannerComponent, SectionServiceDetailAreaComponent, RouterLink, Footer1Component]
})
export class PageServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly wordpress = inject(WordpressService);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('slug') ?? ''),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );

  readonly service = signal<WPPost | null>(null);
  readonly detail = signal<WPPost | null>(null);
  readonly isLoading = signal(true);

  readonly banner = signal({
    background: "assets/images/banner/1.jpg",
    title: "Service Details",
    currentPage: "Services",
    description: ""
  });

  private readonly serviceDetailEffect = effect(() => {
    const slug = this.slug();
    const posts = this.wordpress.uncategorizedPosts();

    if (!slug || !posts.length) {
      this.isLoading.set(true);
      return;
    }

    const service = posts.find(post => post.slug === slug) ?? null;
    const detailPost = service?.acf?.detail_post;
    const detailPostId = typeof detailPost === 'number' ? detailPost : detailPost?.id;
    const cachedDetail = posts.find(post => detailPostId
      ? post.id === detailPostId
      : post.slug === `${slug}-detail`);
    const detail = cachedDetail
      ?? (detailPost && typeof detailPost !== 'number' && detailPost.content ? detailPost : null);

    this.service.set(service);
    this.detail.set(detail);

    if (service && detail) {
      this.banner.set({
        background: detail.featured_media_src_url ?? "assets/images/banner/1.jpg",
        title: service.title.rendered,
        currentPage: service.title.rendered,
        description: service.excerpt.rendered
      });
    }

    this.isLoading.set(false);
  });
}
