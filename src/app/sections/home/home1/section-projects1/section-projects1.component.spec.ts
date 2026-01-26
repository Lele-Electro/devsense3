import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects1Component } from './section-projects1.component';

describe('SectionProjects1Component', () => {
  let component: SectionProjects1Component;
  let fixture: ComponentFixture<SectionProjects1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjects1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
