import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountUpDirective } from './count-up.directive';

@Component({
  imports: [CountUpDirective],
  template: '<span [appCountUp]="years()" [countUpDigits]="2"></span>'
})
class CountUpHostComponent {
  readonly years = signal(12);
}

describe('CountUpDirective', () => {
  let fixture: ComponentFixture<CountUpHostComponent>;
  let element: HTMLSpanElement;
  let observers: TestIntersectionObserver[];
  let frames: Map<number, FrameRequestCallback>;
  let reducedMotion: boolean;

  class TestIntersectionObserver {
    observe = jasmine.createSpy('observe');
    disconnect = jasmine.createSpy('disconnect');
    constructor(private callback: IntersectionObserverCallback, readonly options?: IntersectionObserverInit) {
      observers.push(this);
    }
    show(ratio: number): void {
      const rect = element.getBoundingClientRect();
      this.callback([{ target: element, isIntersecting: ratio > 0, intersectionRatio: ratio,
        boundingClientRect: rect, intersectionRect: rect, rootBounds: null, time: 0 }],
        this as unknown as IntersectionObserver);
    }
  }

  const advanceFrame = (timestamp: number) => {
    const pending = Array.from(frames.values());
    frames.clear();
    pending.forEach(callback => callback(timestamp));
  };

  beforeEach(async () => {
    observers = [];
    frames = new Map();
    reducedMotion = false;
    let id = 0;
    spyOn(window, 'IntersectionObserver').and.callFake(function (callback, options) {
      return new TestIntersectionObserver(callback, options) as unknown as IntersectionObserver;
    });
    spyOn(window, 'requestAnimationFrame').and.callFake(callback => {
      frames.set(++id, callback);
      return id;
    });
    spyOn(window, 'cancelAnimationFrame').and.callFake(frame => { frames.delete(frame); });
    spyOn(window, 'matchMedia').and.callFake(() => ({ matches: reducedMotion } as MediaQueryList));
    TestBed.configureTestingModule({ imports: [CountUpHostComponent] });
    fixture = TestBed.createComponent(CountUpHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    element = fixture.nativeElement.querySelector('span');
  });

  afterEach(() => fixture.destroy());

  it('waits for 40% visibility and counts up once over two seconds', () => {
    expect(observers[0].options?.threshold).toBe(0.4);
    expect(element.textContent).toBe('00');
    observers[0].show(0.39);
    expect(frames.size).toBe(0);
    observers[0].show(0.4);
    expect(observers[0].disconnect).toHaveBeenCalled();
    advanceFrame(0);
    advanceFrame(1000);
    expect(element.textContent).toBe('06');
    advanceFrame(2000);
    expect(element.textContent).toBe('12');
    expect(frames.size).toBe(0);
    observers[0].show(1);
    expect(frames.size).toBe(0);
  });

  it('uses late data and cancels an old animation when the value changes', async () => {
    observers[0].show(1);
    advanceFrame(0);
    fixture.componentInstance.years.set(9);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(frames.size).toBe(0);
    expect(element.textContent).toBe('00');
    observers[1].show(0.4);
    advanceFrame(0);
    advanceFrame(2000);
    expect(element.textContent).toBe('09');
  });

  it('disconnects and cancels animation frames when removed', () => {
    observers[0].show(1);
    expect(frames.size).toBe(1);
    fixture.destroy();
    expect(frames.size).toBe(0);
    expect(observers[0].disconnect).toHaveBeenCalled();
    observers[0].show(1);
    expect(frames.size).toBe(0);
  });

  it('shows the final value without animation for reduced motion', async () => {
    reducedMotion = true;
    fixture.componentInstance.years.set(10);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(element.textContent).toBe('10');
    expect(observers.length).toBe(1);
    expect(frames.size).toBe(0);
  });
});
