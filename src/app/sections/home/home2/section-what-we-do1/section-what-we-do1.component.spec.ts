import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo1Component } from './section-what-we-do1.component';

describe('SectionWhatWeDo1Component', () => {
  let component: SectionWhatWeDo1Component;
  let fixture: ComponentFixture<SectionWhatWeDo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionWhatWeDo1Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionWhatWeDo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
