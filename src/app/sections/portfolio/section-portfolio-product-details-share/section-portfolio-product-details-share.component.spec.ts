import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortfolioProductDetailsShareComponent } from './section-portfolio-product-details-share.component';

describe('SectionPortfolioProductDetailsShareComponent', () => {
  let component: SectionPortfolioProductDetailsShareComponent;
  let fixture: ComponentFixture<SectionPortfolioProductDetailsShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectionPortfolioProductDetailsShareComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionPortfolioProductDetailsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
