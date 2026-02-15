import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAwards1DarkComponent } from './section-awards1-dark.component';

describe('SectionAwards1DarkComponent', () => {
  let component: SectionAwards1DarkComponent;
  let fixture: ComponentFixture<SectionAwards1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionAwards1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionAwards1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
