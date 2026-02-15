import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects1DarkComponent } from './section-projects1-dark.component';

describe('SectionProjects1DarkComponent', () => {
  let component: SectionProjects1DarkComponent;
  let fixture: ComponentFixture<SectionProjects1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionProjects1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjects1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
