import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurClients1DarkComponent } from './section-our-clients1-dark.component';

describe('SectionOurClients1DarkComponent', () => {
  let component: SectionOurClients1DarkComponent;
  let fixture: ComponentFixture<SectionOurClients1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurClients1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurClients1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
