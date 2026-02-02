import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogSidebarComponent } from './section-blog-sidebar.component';

describe('SectionBlogSidebarComponent', () => {
  let component: SectionBlogSidebarComponent;
  let fixture: ComponentFixture<SectionBlogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionBlogSidebarComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
