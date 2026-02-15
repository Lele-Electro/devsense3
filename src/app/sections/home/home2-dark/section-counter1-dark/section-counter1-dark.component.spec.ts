import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCounter1DarkComponent } from './section-counter1-dark.component';

describe('SectionCounter1DarkComponent', () => {
  let component: SectionCounter1DarkComponent;
  let fixture: ComponentFixture<SectionCounter1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionCounter1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionCounter1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
