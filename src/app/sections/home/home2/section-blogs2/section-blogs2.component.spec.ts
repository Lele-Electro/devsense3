import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs2Component } from './section-blogs2.component';

describe('SectionBlogs2Component', () => {
  let component: SectionBlogs2Component;
  let fixture: ComponentFixture<SectionBlogs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
