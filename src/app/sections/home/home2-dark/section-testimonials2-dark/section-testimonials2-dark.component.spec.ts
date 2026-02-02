import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials2DarkComponent } from './section-testimonials2-dark.component';

describe('SectionTestimonials2DarkComponent', () => {
  let component: SectionTestimonials2DarkComponent;
  let fixture: ComponentFixture<SectionTestimonials2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionTestimonials2DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionTestimonials2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
