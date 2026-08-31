import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { WPPost } from '../../../../interfaces/wordpress';
import { WordpressService } from '../../../../services/wordpress.service';
import { PageServiceDetailComponent } from './page-service-detail.component';

describe('PageServiceDetailComponent', () => {
  let component: PageServiceDetailComponent;
  let fixture: ComponentFixture<PageServiceDetailComponent>;
  const paramMap = new BehaviorSubject(convertToParamMap({ slug: 'web-development' }));
  const posts = signal<WPPost[]>([]);
  const wordpress = {
    uncategorizedPosts: posts,
    getPostBySlug: jasmine.createSpy('getPostBySlug'),
    getPostById: jasmine.createSpy('getPostById'),
    getMedia: jasmine.createSpy('getMedia')
  };

  beforeEach(async () => {
    posts.set([]);
    paramMap.next(convertToParamMap({ slug: 'web-development' }));
    wordpress.getPostBySlug.calls.reset();
    wordpress.getPostById.calls.reset();
    wordpress.getMedia.calls.reset();

    await TestBed.configureTestingModule({
      imports: [PageServiceDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: paramMap.asObservable() } },
        { provide: WordpressService, useValue: wordpress }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resolves service details from the prefetched posts without extra requests', () => {
    const detail = {
      id: 20,
      slug: 'web-development-detail',
      title: { rendered: 'Web development details' },
      content: { rendered: '<p>Detail content</p>' },
      featured_media_src_url: 'https://example.com/service.jpg'
    } as WPPost;
    const service = {
      id: 10,
      slug: 'web-development',
      title: { rendered: 'Web development' },
      excerpt: { rendered: '<p>Service summary</p>' },
      acf: { detail_post: detail.id }
    } as WPPost;

    expect(component.isLoading()).toBeTrue();

    posts.set([service, detail]);
    fixture.detectChanges();

    expect(component.service()).toBe(service);
    expect(component.detail()).toBe(detail);
    expect(component.banner().background).toBe(detail.featured_media_src_url!);
    expect(component.isLoading()).toBeFalse();
    expect(wordpress.getPostBySlug).not.toHaveBeenCalled();
    expect(wordpress.getPostById).not.toHaveBeenCalled();
    expect(wordpress.getMedia).not.toHaveBeenCalled();
  });
});
