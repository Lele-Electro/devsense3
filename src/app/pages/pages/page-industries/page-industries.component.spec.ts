import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { INDUSTRIES, PageIndustriesComponent } from './page-industries.component';

describe('PageIndustriesComponent', () => {
  let fixture: ComponentFixture<PageIndustriesComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIndustriesComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PageIndustriesComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('renders the section heading', () => {
    expect(element.querySelector('.section-head-label')?.textContent).toContain(INDUSTRIES.heading.label);
    expect(element.querySelector('.section-head-two .sx-title-two')?.textContent).toContain(INDUSTRIES.heading.title);
    expect(element.querySelector('.section-head-lede')?.textContent).toContain(INDUSTRIES.heading.lede);
  });

  it('renders one card per industry from the data', () => {
    const titles = Array.from(element.querySelectorAll('.sx-info-card__title')).map(title => title.textContent?.trim());

    expect(titles).toEqual(INDUSTRIES.cards.map(card => card.title));
    expect(titles.length).toBe(6);
  });

  it('renders every paragraph of each card', () => {
    const cards = Array.from(element.querySelectorAll('.sx-info-card'));

    cards.forEach((card, index) => {
      expect(card.querySelectorAll('p').length).toBe(INDUSTRIES.cards[index].paragraphs.length);
    });
  });
});
