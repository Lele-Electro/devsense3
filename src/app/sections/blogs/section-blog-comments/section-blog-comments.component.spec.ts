import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogCommentsComponent } from './section-blog-comments.component';

describe('SectionBlogCommentsComponent', () => {
  let component: SectionBlogCommentsComponent;
  let fixture: ComponentFixture<SectionBlogCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
