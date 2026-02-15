import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogTagsComponent } from './section-blog-tags.component';

describe('SectionBlogTagsComponent', () => {
  let component: SectionBlogTagsComponent;
  let fixture: ComponentFixture<SectionBlogTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionBlogTagsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
