import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurClients1Component } from './section-our-clients1.component';

describe('SectionOurClients1Component', () => {
  let component: SectionOurClients1Component;
  let fixture: ComponentFixture<SectionOurClients1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurClients1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurClients1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
