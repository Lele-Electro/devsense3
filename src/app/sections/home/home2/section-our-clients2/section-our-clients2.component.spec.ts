import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurClients2Component } from './section-our-clients2.component';

describe('SectionOurClients2Component', () => {
  let component: SectionOurClients2Component;
  let fixture: ComponentFixture<SectionOurClients2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurClients2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurClients2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
