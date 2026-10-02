import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { HelperService } from './services/helper.service';
import { WordpressService } from './services/wordpress.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
    // The legacy page plugins are unrelated to loader coordination.
    spyOn(AppComponent.prototype, 'ngAfterViewInit').and.stub();
  });

  afterEach(() => {
    fixture?.destroy();
    http?.verify();
  });

  function createApp(): void {
    http = TestBed.inject(HttpTestingController);
    spyOn(TestBed.inject(HelperService), 'log');
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }

  it('keeps the loader mounted after API readiness until its logo sequence completes', () => {
    createApp();
    http.expectOne(request => request.url.includes('/posts?')).flush([]);
    expect(TestBed.inject(WordpressService).isLoading()).toBeTrue();
    http.expectOne(request => request.url.includes('/categories?')).flush([]);
    fixture.detectChanges();

    const loader = fixture.debugElement.query(By.directive(LoaderComponent)).componentInstance as LoaderComponent;
    expect(loader.dataReady()).toBeTrue();
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeNull();
    loader.completed.emit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-loader')).toBeNull();
    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
  });

  it('settles API readiness with fallback content when requests fail', () => {
    createApp();
    spyOn(console, 'warn');
    http.expectOne(request => request.url.includes('/posts?')).flush('', { status: 503, statusText: 'Unavailable' });
    http.expectOne(request => request.url.includes('/categories?')).flush('', { status: 503, statusText: 'Unavailable' });
    fixture.detectChanges();
    const loader = fixture.debugElement.query(By.directive(LoaderComponent)).componentInstance as LoaderComponent;
    expect(loader.dataReady()).toBeTrue();
  });

  it('does not wait for a browser animation when rendering on the server', () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    createApp();
    http.expectOne(request => request.url.includes('/posts?')).flush([]);
    http.expectOne(request => request.url.includes('/categories?')).flush([]);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-loader')).toBeNull();
    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
  });
});
