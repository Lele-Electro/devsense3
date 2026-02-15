import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPricing1DarkComponent } from './section-pricing1-dark.component';

describe('SectionPricing1DarkComponent', () => {
  let component: SectionPricing1DarkComponent;
  let fixture: ComponentFixture<SectionPricing1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionPricing1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionPricing1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
