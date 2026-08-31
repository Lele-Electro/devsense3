import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPPost } from '../../../interfaces/wordpress';
import { WordpressService } from '../../../services/wordpress.service';
import { PageOurProcessComponent } from './page-our-process.component';

describe('PageOurProcessComponent', () => {
  let component: PageOurProcessComponent;
  let fixture: ComponentFixture<PageOurProcessComponent>;
  const posts = signal<WPPost[]>([]);
  const wordpress = {
    uncategorizedPosts: posts,
    fetchPostsUnderCategory: (allPosts: WPPost[], categorySlug: string) =>
      allPosts.filter(post => post.class_list?.includes(categorySlug))
  };

  beforeEach(async () => {
    posts.set([]);

    await TestBed.configureTestingModule({
      imports: [PageOurProcessComponent],
      providers: [
        { provide: WordpressService, useValue: wordpress }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageOurProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders WordPress process posts in ACF order without week labels', () => {
    posts.set([
      {
        id: 2,
        acf: { number: 2 },
        title: { rendered: 'Team selection and onboarding' },
        excerpt: { rendered: '<p>Recruit and train the team.</p>' },
        class_list: ['category-our-process'],
        featured_media_src_url: 'https://example.com/onboarding.jpg'
      } as WPPost,
      {
        id: 1,
        acf: { number: 1 },
        title: { rendered: 'Scope and process capture' },
        excerpt: { rendered: '<p>Document volumes, tools and SLAs.</p>' },
        class_list: ['category-our-process'],
        featured_media_src_url: 'https://example.com/scope.jpg'
      } as WPPost
    ]);
    fixture.detectChanges();

    expect(component.process.map(item => item.type === 'data' ? item.serial : item.image)).toEqual([
      'https://example.com/scope.jpg',
      '01',
      'https://example.com/onboarding.jpg',
      '02',
      'assets/images/our-process/happy-client-handshake.jpg'
    ]);
    expect(fixture.nativeElement.textContent).toContain('Scope and process capture');
    expect(fixture.nativeElement.textContent).not.toMatch(/\bweeks?\b/i);
  });
});
