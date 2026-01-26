import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeam1Component } from './page-team1.component';

describe('PageTeam1Component', () => {
  let component: PageTeam1Component;
  let fixture: ComponentFixture<PageTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeam1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
