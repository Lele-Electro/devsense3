import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogNewsletterComponent } from './section-blog-newsletter.component';

describe('SectionBlogNewsletterComponent', () => {
  let component: SectionBlogNewsletterComponent;
  let fixture: ComponentFixture<SectionBlogNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
