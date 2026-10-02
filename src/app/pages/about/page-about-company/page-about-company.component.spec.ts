import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PageAboutCompanyComponent } from './page-about-company.component';

describe('PageAboutCompanyComponent', () => {
  let component: PageAboutCompanyComponent;
  let fixture: ComponentFixture<PageAboutCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageAboutCompanyComponent],
    providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('passes the About heading and three cards to the About section', () => {
    expect(component.about.heading.title).toBe('Where ideas become reality.');
    expect(component.about.cards.map(card => card.title)).toEqual([
      'Five things we will not trade away',
      'The people you will actually deal with',
      'Giving the skills back to where we found them.'
    ]);
  });
});
