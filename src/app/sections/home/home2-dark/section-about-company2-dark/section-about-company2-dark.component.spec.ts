import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutCompany2DarkComponent } from './section-about-company2-dark.component';

describe('SectionAboutCompany2DarkComponent', () => {
  let component: SectionAboutCompany2DarkComponent;
  let fixture: ComponentFixture<SectionAboutCompany2DarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAboutCompany2DarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAboutCompany2DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
