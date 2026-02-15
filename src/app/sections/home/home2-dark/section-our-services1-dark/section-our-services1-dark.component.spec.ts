import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurServices1DarkComponent } from './section-our-services1-dark.component';

describe('SectionOurServices1DarkComponent', () => {
  let component: SectionOurServices1DarkComponent;
  let fixture: ComponentFixture<SectionOurServices1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionOurServices1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionOurServices1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
