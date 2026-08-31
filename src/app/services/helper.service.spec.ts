import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFirstSentence', () => {
    it('returns only the first sentence from WordPress HTML', () => {
      const html = '<p>Design, build &#038; run critical platforms. This sentence is omitted.</p>';

      expect(service.getFirstSentence(html)).toBe('Design, build &#038; run critical platforms.');
    });

    it('returns all text when sentence punctuation is absent', () => {
      expect(service.getFirstSentence('<p>One concise statement</p>')).toBe('One concise statement');
    });
  });
});
