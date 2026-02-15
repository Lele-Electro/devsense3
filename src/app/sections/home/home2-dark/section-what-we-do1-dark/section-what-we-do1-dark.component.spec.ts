import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo1DarkComponent } from './section-what-we-do1-dark.component';

describe('SectionWhatWeDo1DarkComponent', () => {
  let component: SectionWhatWeDo1DarkComponent;
  let fixture: ComponentFixture<SectionWhatWeDo1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionWhatWeDo1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionWhatWeDo1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
