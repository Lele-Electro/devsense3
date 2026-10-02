import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { PageContactUsComponent } from './page-contact-us.component';

describe('PageContactUsComponent', () => {
  let component: PageContactUsComponent;
  let fixture: ComponentFixture<PageContactUsComponent>;

  // The map loads Leaflet with a dynamic import, so wait for it to render.
  async function waitFor<T extends Element>(selector: string): Promise<T> {
    for (let attempt = 0; attempt < 60; attempt++) {
      const element = fixture.nativeElement.querySelector(selector) as T | null;
      if (element) {
        return element;
      }
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    throw new Error(`Timed out waiting for ${selector}`);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PageContactUsComponent],
    providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideNoopAnimations()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uses keyless OpenStreetMap tiles instead of the CARTO basemap that needs an API key', async () => {
    const tile = await waitFor<HTMLImageElement>('.contact-map img.leaflet-tile');

    expect(tile.src).toMatch(/^https:\/\/tile\.openstreetmap\.org\/\d+\/\d+\/\d+\.png$/);
    expect(fixture.nativeElement.querySelector('.leaflet-control-attribution')?.textContent).toContain('OpenStreetMap');
  });

  it('marks the premises with the loader centre piece in colour', async () => {
    const mark = await waitFor<HTMLImageElement>('.premises-marker .premises-marker__pin img');

    expect(mark.getAttribute('src')).toBe('assets/images/loader/mark-colour.svg');
  });
});
