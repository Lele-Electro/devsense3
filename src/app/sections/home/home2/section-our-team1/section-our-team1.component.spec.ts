import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurTeam1Component } from './section-our-team1.component';

describe('SectionOurTeam1Component', () => {
  let component: SectionOurTeam1Component;
  let fixture: ComponentFixture<SectionOurTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionOurTeam1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
