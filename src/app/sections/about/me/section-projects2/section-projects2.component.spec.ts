import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects2Component } from './section-projects2.component';

describe('SectionProjects2Component', () => {
  let component: SectionProjects2Component;
  let fixture: ComponentFixture<SectionProjects2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionProjects2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjects2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
