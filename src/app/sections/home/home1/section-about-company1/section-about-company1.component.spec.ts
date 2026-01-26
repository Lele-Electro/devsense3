import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutCompany1Component } from './section-about-company1.component';

describe('SectionAboutCompany1Component', () => {
  let component: SectionAboutCompany1Component;
  let fixture: ComponentFixture<SectionAboutCompany1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAboutCompany1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAboutCompany1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
