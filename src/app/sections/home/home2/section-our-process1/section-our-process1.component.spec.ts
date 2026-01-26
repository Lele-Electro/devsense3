import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurProcess1Component } from './section-our-process1.component';

describe('SectionOurProcess1Component', () => {
  let component: SectionOurProcess1Component;
  let fixture: ComponentFixture<SectionOurProcess1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurProcess1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurProcess1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
