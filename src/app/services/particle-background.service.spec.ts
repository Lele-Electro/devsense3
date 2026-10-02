import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ParticleBackgroundService } from './particle-background.service';

describe('ParticleBackgroundService', () => {
  let service: ParticleBackgroundService;
  let container: HTMLDivElement;
  let observers: TestResizeObserver[];
  let frames: Map<number, FrameRequestCallback>;

  class TestResizeObserver implements ResizeObserver {
    observe = jasmine.createSpy('observe');
    unobserve = jasmine.createSpy('unobserve');
    disconnect = jasmine.createSpy('disconnect');
    constructor(private callback: ResizeObserverCallback) {
      observers.push(this);
    }
    resize(): void { this.callback([], this); }
  }

  const createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
    container.append(canvas);
    return canvas;
  };

  const paintedPixels = (canvas: HTMLCanvasElement) => {
    const pixels = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height).data;
    return pixels.some((value, index) => index % 4 === 3 && value > 0);
  };

  beforeEach(() => {
    observers = [];
    frames = new Map();
    let frameId = 0;
    spyOn(window, 'ResizeObserver').and.callFake(function (callback) {
      return new TestResizeObserver(callback);
    });
    spyOn(window, 'requestAnimationFrame').and.callFake(callback => {
      frames.set(++frameId, callback);
      return frameId;
    });
    spyOn(window, 'cancelAnimationFrame').and.callFake(id => { frames.delete(id); });
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'browser' }] });
    service = TestBed.inject(ParticleBackgroundService);
    container = document.createElement('div');
    container.style.cssText = 'position:relative;width:300px;height:200px';
    document.body.append(container);
  });

  afterEach(() => container.remove());

  function frameAt(now: number): void {
    const pending = Array.from(frames.values());
    frames.clear();
    pending.forEach(callback => callback(now));
  }

  it('assigns stable random palette colors to particles and their glow, resolving CSS variables', () => {
    let seed = 1234;
    spyOn(Math, 'random').and.callFake(() => {
      seed = (1664525 * seed + 1013904223) >>> 0;
      return seed / 0x100000000;
    });
    container.style.setProperty('--pink', '#D9719D');
    const canvas = createCanvas();
    const context = canvas.getContext('2d')!;
    const colors: string[] = [];
    const fill = context.fill.bind(context);
    spyOn(context, 'fill').and.callFake(() => {
      colors.push(context.fillStyle as string);
      expect(context.shadowColor).toBe(context.fillStyle as string);
      fill();
    });
    const animation = service.attach(canvas, {
      colors: ['var(--pink)', '#F7D6A0', '#53BDB3', '#5C4380'],
      color: '#ff0000',
      speed: 0
    });
    expect(new Set(colors)).toEqual(new Set(['#d9719d', '#f7d6a0', '#53bdb3', '#5c4380']));
    const originalColors = [...colors];
    colors.length = 0;
    frameAt(performance.now() + 16);
    expect(colors).toEqual(originalColors);
    animation.destroy();
  });

  it('interpolates and retargets colors without resetting positions, including during resize', () => {
    let now = 1000;
    spyOn(performance, 'now').and.callFake(() => now);
    const canvas = createCanvas();
    const context = canvas.getContext('2d')!;
    const arcs = spyOn(context, 'arc').and.callThrough();
    const animation = service.attach(canvas, { color: '#000000', count: 2, speed: 0, connectionDistance: 1000 });
    const positions = arcs.calls.allArgs().map(([x, y]): [number, number] => [x, y]);
    animation.setColors(['#ffffff'], 500);
    arcs.calls.reset();
    frameAt(now);
    expect(context.fillStyle).toBe('#000000');
    expect(arcs.calls.allArgs().map(args => args.slice(0, 2))).toEqual(positions);
    now += 250;
    frameAt(now);
    const midpoint = context.fillStyle as string;
    // Halfway through CSS ease-out is about 68.5% of the color change.
    expect(parseInt(midpoint.slice(1, 3), 16)).toBeCloseTo(175, 0);
    expect(context.strokeStyle).toBe(midpoint);
    expect(context.shadowColor).toBe(midpoint);
    container.style.width = '600px';
    arcs.calls.reset();
    observers[0].resize();
    expect(context.fillStyle).toBe(midpoint);
    expect(arcs.calls.allArgs().map(args => args.slice(0, 2))).toEqual(positions.map(([x, y]) => [x * 2, y]));
    animation.setColors('#00ff00', 500);
    frameAt(now);
    expect(context.fillStyle).toBe(midpoint);
    now += 500;
    frameAt(now);
    expect(context.fillStyle).toBe('#00ff00');
    expect(frames.size).toBe(1);
    expect(observers.length).toBe(1);
    animation.destroy();
    animation.setColors('#ff0000', 500);
    expect(frames.size).toBe(0);
  });

  it('falls back to a single color for an empty initial palette and to the theme when clearing colors', () => {
    const canvas = createCanvas();
    canvas.style.setProperty('--cyber-grape-particle-animation', '#776699');
    const animation = service.attach(canvas, { colors: [], color: '#ff0000' });
    expect(canvas.getContext('2d')!.fillStyle).toBe('#ff0000');
    animation.setColors([]);
    frameAt(performance.now() + 16);
    expect(canvas.getContext('2d')!.fillStyle).toBe('#776699');
    animation.destroy();
  });

  it('keeps multiple canvases independent and clears only the destroyed instance', () => {
    const firstCanvas = createCanvas();
    const secondCanvas = createCanvas();
    const first = service.attach(firstCanvas, { color: '#ff0000' });
    const second = service.attach(secondCanvas, { color: '#00ff00' });
    for (const property of ['fillStyle', 'strokeStyle', 'shadowColor'] as const) {
      expect(firstCanvas.getContext('2d')![property]).toBe('#ff0000');
      expect(secondCanvas.getContext('2d')![property]).toBe('#00ff00');
    }
    expect(frames.size).toBe(2);
    expect(paintedPixels(firstCanvas)).toBeTrue();
    first.destroy();
    first.destroy();
    expect(frames.size).toBe(1);
    expect(observers[0].disconnect).toHaveBeenCalledTimes(1);
    expect(paintedPixels(firstCanvas)).toBeFalse();
    expect(paintedPixels(secondCanvas)).toBeTrue();
    second.destroy();
    expect(frames.size).toBe(0);
  });

  it('replaces an attachment without letting an old reference stop the replacement', () => {
    const canvas = createCanvas();
    const first = service.attach(canvas);
    const replacement = service.attach(canvas, { color: '#ff0000' });
    first.destroy();
    expect(frames.size).toBe(1);
    expect(observers[0].disconnect).toHaveBeenCalledTimes(1);
    expect(observers[1].disconnect).not.toHaveBeenCalled();
    replacement.destroy();
  });

  it('resolves inherited and canvas-local CSS variables without changing canvas styles or children', () => {
    container.style.setProperty('--particle-colour', '#40a0c0');
    const firstCanvas = createCanvas();
    const secondCanvas = createCanvas();
    secondCanvas.style.setProperty('--particle-colour', '#ff8800');
    secondCanvas.style.setProperty('color', 'blue', 'important');
    const fallbackContent = document.createElement('span');
    secondCanvas.append(fallbackContent);
    const originalStyle = secondCanvas.getAttribute('style');
    const options = { color: 'var(--particle-colour, #5C4380)' };
    const first = service.attach(firstCanvas, options);
    const second = service.attach(secondCanvas, options);

    expect(firstCanvas.getContext('2d')!.fillStyle).toBe('#40a0c0');
    expect(secondCanvas.getContext('2d')!.fillStyle).toBe('#ff8800');
    expect(firstCanvas.children.length).toBe(0);
    expect(secondCanvas.getAttribute('style')).toBe(originalStyle);
    expect(Array.from(secondCanvas.children)).toEqual([fallbackContent]);
    first.destroy();
    second.destroy();
  });

  it('supports nested variable fallbacks and resolves updated colours when reattached', () => {
    const canvas = createCanvas();
    const options = { color: 'var(--missing-particle-colour, var(--local-particle-colour, #5C4380))' };
    const first = service.attach(canvas, options);
    expect(canvas.getContext('2d')!.fillStyle).toBe('#5c4380');

    canvas.style.setProperty('--local-particle-colour', '#53bdb3');
    const replacement = service.attach(canvas, options);
    expect(canvas.getContext('2d')!.fillStyle).toBe('#53bdb3');
    expect(frames.size).toBe(1);
    first.destroy();
    replacement.destroy();
  });

  it('uses the canvas-scoped purple theme variable when no colour is supplied', () => {
    const canvas = createCanvas();
    canvas.style.setProperty('--cyber-grape-particle-animation', '#776699');
    const animation = service.attach(canvas);
    expect(canvas.getContext('2d')!.fillStyle).toBe('#776699');
    animation.destroy();
  });

  it('clips the centre, pauses when borders disappear, and resumes when they return', () => {
    const border = document.createElement('div');
    border.style.cssText = 'position:absolute;inset:0;border:40px solid black';
    container.append(border);
    const canvas = createCanvas();
    const animation = service.attach(canvas, { borderTarget: border });
    const centre = canvas.getContext('2d')!.getImageData(40, 40, 220, 120).data;
    expect(centre.every(value => value === 0)).toBeTrue();
    expect(paintedPixels(canvas)).toBeTrue();
    border.style.borderWidth = '0';
    observers[0].resize();
    expect(frames.size).toBe(0);
    expect(paintedPixels(canvas)).toBeFalse();
    border.style.borderWidth = '40px';
    observers[0].resize();
    expect(frames.size).toBe(1);
    expect(paintedPixels(canvas)).toBeTrue();
    animation.destroy();
    observers[0].resize();
    expect(frames.size).toBe(0);
  });

  it('does not touch canvas or browser animation APIs during server rendering', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const canvas = createCanvas();
    const context = spyOn(canvas, 'getContext');
    const animation = TestBed.inject(ParticleBackgroundService).attach(canvas);
    animation.setColors(['#D9719D', '#53BDB3'], 500);
    animation.destroy();
    expect(context).not.toHaveBeenCalled();
    expect(observers.length).toBe(0);
    expect(frames.size).toBe(0);
  });
});
