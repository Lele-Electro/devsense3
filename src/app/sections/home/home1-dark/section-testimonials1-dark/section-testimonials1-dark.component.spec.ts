import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials1DarkComponent } from './section-testimonials1-dark.component';

describe('SectionTestimonials1DarkComponent', () => {
  let component: SectionTestimonials1DarkComponent;
  let fixture: ComponentFixture<SectionTestimonials1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTestimonials1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTestimonials1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
