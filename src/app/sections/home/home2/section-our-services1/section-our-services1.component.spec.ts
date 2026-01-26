import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurServices1Component } from './section-our-services1.component';

describe('SectionOurServices1Component', () => {
  let component: SectionOurServices1Component;
  let fixture: ComponentFixture<SectionOurServices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurServices1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurServices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
