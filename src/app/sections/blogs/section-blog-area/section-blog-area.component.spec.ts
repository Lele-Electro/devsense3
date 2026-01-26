import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogAreaComponent } from './section-blog-area.component';

describe('SectionBlogAreaComponent', () => {
  let component: SectionBlogAreaComponent;
  let fixture: ComponentFixture<SectionBlogAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
