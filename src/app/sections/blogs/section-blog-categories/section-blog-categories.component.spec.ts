import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogCategoriesComponent } from './section-blog-categories.component';

describe('SectionBlogCategoriesComponent', () => {
  let component: SectionBlogCategoriesComponent;
  let fixture: ComponentFixture<SectionBlogCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
