import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogGalleryComponent } from './section-blog-gallery.component';

describe('SectionBlogGalleryComponent', () => {
  let component: SectionBlogGalleryComponent;
  let fixture: ComponentFixture<SectionBlogGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
