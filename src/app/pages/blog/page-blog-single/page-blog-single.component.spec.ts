import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogSingleComponent } from './page-blog-single.component';

describe('PageBlogSingleComponent', () => {
  let component: PageBlogSingleComponent;
  let fixture: ComponentFixture<PageBlogSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageBlogSingleComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
