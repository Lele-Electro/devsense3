import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurClients3Component } from './section-our-clients3.component';

describe('SectionOurClients3Component', () => {
  let component: SectionOurClients3Component;
  let fixture: ComponentFixture<SectionOurClients3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurClients3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurClients3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
