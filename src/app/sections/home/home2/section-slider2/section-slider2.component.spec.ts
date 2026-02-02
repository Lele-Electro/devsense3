import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider2Component } from './section-slider2.component';

describe('SectionSlider2Component', () => {
  let component: SectionSlider2Component;
  let fixture: ComponentFixture<SectionSlider2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionSlider2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
