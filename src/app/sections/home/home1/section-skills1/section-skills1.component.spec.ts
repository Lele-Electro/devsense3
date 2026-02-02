import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkills1Component } from './section-skills1.component';

describe('SectionSkills1Component', () => {
  let component: SectionSkills1Component;
  let fixture: ComponentFixture<SectionSkills1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionSkills1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionSkills1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
