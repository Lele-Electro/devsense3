import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials1Component } from './section-testimonials1.component';

describe('SectionTestimonials1Component', () => {
  let component: SectionTestimonials1Component;
  let fixture: ComponentFixture<SectionTestimonials1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionTestimonials1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionTestimonials1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
