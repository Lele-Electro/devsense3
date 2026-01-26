import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials2Component } from './section-testimonials2.component';

describe('SectionTestimonials2Component', () => {
  let component: SectionTestimonials2Component;
  let fixture: ComponentFixture<SectionTestimonials2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTestimonials2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTestimonials2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
