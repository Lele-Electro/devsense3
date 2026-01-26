import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogSearchComponent } from './section-blog-search.component';

describe('SectionBlogSearchComponent', () => {
  let component: SectionBlogSearchComponent;
  let fixture: ComponentFixture<SectionBlogSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
