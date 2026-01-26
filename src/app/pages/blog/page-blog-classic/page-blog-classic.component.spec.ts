import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogClassicComponent } from './page-blog-classic.component';

describe('PageBlogClassicComponent', () => {
  let component: PageBlogClassicComponent;
  let fixture: ComponentFixture<PageBlogClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogClassicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
