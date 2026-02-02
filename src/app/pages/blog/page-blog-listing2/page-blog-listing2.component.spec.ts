import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogListing2Component } from './page-blog-listing2.component';

describe('PageBlogListing2Component', () => {
  let component: PageBlogListing2Component;
  let fixture: ComponentFixture<PageBlogListing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageBlogListing2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogListing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
