import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider2DarkComponent } from './section-slider2-dark.component';

describe('SectionSlider2DarkComponent', () => {
  let component: SectionSlider2DarkComponent;
  let fixture: ComponentFixture<SectionSlider2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider2DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSlider2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
