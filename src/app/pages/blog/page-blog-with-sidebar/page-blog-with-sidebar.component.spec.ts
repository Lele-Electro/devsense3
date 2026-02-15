import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogWithSidebarComponent } from './page-blog-with-sidebar.component';

describe('PageBlogWithSidebarComponent', () => {
  let component: PageBlogWithSidebarComponent;
  let fixture: ComponentFixture<PageBlogWithSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageBlogWithSidebarComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
