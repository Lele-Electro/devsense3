import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { OUR_PRODUCTS, PageOurProductsComponent } from './page-our-products.component';

describe('PageOurProductsComponent', () => {
  let fixture: ComponentFixture<PageOurProductsComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOurProductsComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PageOurProductsComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('renders the section heading', () => {
    expect(element.querySelector('.section-head-two .sx-title-two')?.textContent).toContain(OUR_PRODUCTS.heading.title);
    expect(element.querySelector('.section-head-lede')?.textContent).toContain(OUR_PRODUCTS.heading.lede);
  });

  it('renders each product from the data with its number heading', () => {
    const titles = Array.from(element.querySelectorAll<HTMLElement>('.product-case .sx-title'));

    expect(titles.map(title => title.textContent?.trim())).toEqual(['SalesAI', 'Finova AI', 'BCC Legal']);
    expect(titles.map(title => title.dataset['title'])).toEqual(['01', '02', '03']);
  });

  it('uses the local screenshots for every product', () => {
    const sources = Array.from(element.querySelectorAll<HTMLImageElement>('.product-case img'))
      .map(image => image.getAttribute('src'));

    expect(sources.length).toBe(6);
    sources.forEach(source => expect(source).toMatch(/^assets\/images\/our-products\/.+\.jpg$/));
  });

  it('alternates the image side from one product to the next', () => {
    const cases = Array.from(element.querySelectorAll('.product-case'));

    expect(cases.map(item => item.classList.contains('flex-lg-row-reverse'))).toEqual([false, true, false]);
  });
});
