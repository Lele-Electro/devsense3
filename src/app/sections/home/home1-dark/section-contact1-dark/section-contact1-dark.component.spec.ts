import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContact1DarkComponent } from './section-contact1-dark.component';

describe('SectionContact1DarkComponent', () => {
  let component: SectionContact1DarkComponent;
  let fixture: ComponentFixture<SectionContact1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionContact1DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionContact1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
