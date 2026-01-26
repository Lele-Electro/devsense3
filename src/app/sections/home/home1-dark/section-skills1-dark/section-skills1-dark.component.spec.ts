import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkills1DarkComponent } from './section-skills1-dark.component';

describe('SectionSkills1DarkComponent', () => {
  let component: SectionSkills1DarkComponent;
  let fixture: ComponentFixture<SectionSkills1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSkills1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSkills1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
