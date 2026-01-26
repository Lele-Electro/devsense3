import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogMasonryComponent } from './page-blog-masonry.component';

describe('PageBlogMasonryComponent', () => {
  let component: PageBlogMasonryComponent;
  let fixture: ComponentFixture<PageBlogMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogMasonryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
