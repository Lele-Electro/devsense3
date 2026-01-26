import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutCompany2Component } from './section-about-company2.component';

describe('SectionAboutCompany2Component', () => {
  let component: SectionAboutCompany2Component;
  let fixture: ComponentFixture<SectionAboutCompany2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAboutCompany2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAboutCompany2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
