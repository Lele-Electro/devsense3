import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurTeam1DarkComponent } from './section-our-team1-dark.component';

describe('SectionOurTeam1DarkComponent', () => {
  let component: SectionOurTeam1DarkComponent;
  let fixture: ComponentFixture<SectionOurTeam1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurTeam1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurTeam1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
