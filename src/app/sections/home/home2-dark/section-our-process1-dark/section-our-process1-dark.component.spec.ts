import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurProcess1DarkComponent } from './section-our-process1-dark.component';

describe('SectionOurProcess1DarkComponent', () => {
  let component: SectionOurProcess1DarkComponent;
  let fixture: ComponentFixture<SectionOurProcess1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOurProcess1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurProcess1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
