import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogListingComponent } from './page-blog-listing.component';

describe('PageBlogListingComponent', () => {
  let component: PageBlogListingComponent;
  let fixture: ComponentFixture<PageBlogListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageBlogListingComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
