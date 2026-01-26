import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutCompanyComponent } from './page-about-company.component';

describe('PageAboutCompanyComponent', () => {
  let component: PageAboutCompanyComponent;
  let fixture: ComponentFixture<PageAboutCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
