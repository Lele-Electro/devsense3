import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider1DarkComponent } from './section-slider1-dark.component';

describe('SectionSlider1DarkComponent', () => {
  let component: SectionSlider1DarkComponent;
  let fixture: ComponentFixture<SectionSlider1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionSlider1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionSlider1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
