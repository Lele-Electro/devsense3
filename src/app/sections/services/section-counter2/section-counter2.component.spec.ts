import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCounter2Component } from './section-counter2.component';

describe('SectionCounter2Component', () => {
  let component: SectionCounter2Component;
  let fixture: ComponentFixture<SectionCounter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionCounter2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
