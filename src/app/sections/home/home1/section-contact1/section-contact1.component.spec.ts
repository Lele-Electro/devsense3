import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContact1Component } from './section-contact1.component';

describe('SectionContact1Component', () => {
  let component: SectionContact1Component;
  let fixture: ComponentFixture<SectionContact1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionContact1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionContact1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
