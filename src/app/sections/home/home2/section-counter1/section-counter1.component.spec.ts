import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCounter1Component } from './section-counter1.component';

describe('SectionCounter1Component', () => {
  let component: SectionCounter1Component;
  let fixture: ComponentFixture<SectionCounter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCounter1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCounter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
