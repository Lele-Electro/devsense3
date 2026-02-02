import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutCompany1DarkComponent } from './section-about-company1-dark.component';

describe('SectionAboutCompany1DarkComponent', () => {
  let component: SectionAboutCompany1DarkComponent;
  let fixture: ComponentFixture<SectionAboutCompany1DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SectionAboutCompany1DarkComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionAboutCompany1DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
