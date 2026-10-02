import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsContent, SectionAboutUsComponent } from './section-about-us.component';

describe('SectionAboutUsComponent', () => {
  let fixture: ComponentFixture<SectionAboutUsComponent>;
  let element: HTMLElement;

  const content: AboutUsContent = {
    heading: { label: 'About', title: 'Where ideas become reality.', lede: 'A Pretoria engineering company.' },
    cards: [
      { tag: 'What we stand for', title: 'First card', paragraphs: ['One.', 'Two.'] },
      { tag: 'What we stand for', title: 'Second card', paragraphs: ['Three.'] }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAboutUsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionAboutUsComponent);
    fixture.componentRef.setInput('data', content);
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('renders the heading', () => {
    expect(element.querySelector('.section-head-label')?.textContent).toContain('About');
    expect(element.querySelector('.sx-title-two')?.textContent).toContain('Where ideas become reality.');
    expect(element.querySelector('.section-head-lede')?.textContent).toContain('A Pretoria engineering company.');
  });

  it('renders one card per item with its tag and paragraphs', () => {
    const cards = Array.from(element.querySelectorAll('.sx-info-card'));

    expect(cards.length).toBe(2);
    expect(cards.map(card => card.querySelector('.sx-info-card__title')?.textContent?.trim())).toEqual(['First card', 'Second card']);
    expect(cards.map(card => card.querySelectorAll('p').length)).toEqual([2, 1]);
    expect(cards[0].querySelector('.sx-info-card__tag')?.textContent).toContain('What we stand for');
  });
});
