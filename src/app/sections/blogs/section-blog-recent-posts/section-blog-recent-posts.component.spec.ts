import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogRecentPostsComponent } from './section-blog-recent-posts.component';

describe('SectionBlogRecentPostsComponent', () => {
  let component: SectionBlogRecentPostsComponent;
  let fixture: ComponentFixture<SectionBlogRecentPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogRecentPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogRecentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
