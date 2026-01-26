import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeam2Component } from './page-team2.component';

describe('PageTeam2Component', () => {
  let component: PageTeam2Component;
  let fixture: ComponentFixture<PageTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeam2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
