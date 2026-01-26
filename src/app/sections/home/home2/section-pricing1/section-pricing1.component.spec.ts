import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPricing1Component } from './section-pricing1.component';

describe('SectionPricing1Component', () => {
  let component: SectionPricing1Component;
  let fixture: ComponentFixture<SectionPricing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPricing1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPricing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
