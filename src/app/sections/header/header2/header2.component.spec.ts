import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header2Component } from './header2.component';

describe('Header2Component', () => {
  let component: Header2Component;
  let fixture: ComponentFixture<Header2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Header2Component],
    providers: [provideRouter([])]
})
    .compileComponents();

    fixture = TestBed.createComponent(Header2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders no particle animation by default', () => {
    expect(fixture.nativeElement.querySelector('canvas')).toBeNull();
  });

  it('publishes its height for banners that extend behind it', async () => {
    await fixture.whenStable();
    const header = fixture.nativeElement.querySelector('header') as HTMLElement;
    expect(document.documentElement.style.getPropertyValue('--site-header-height'))
      .toBe(`${header.getBoundingClientRect().height}px`);
  });
});
