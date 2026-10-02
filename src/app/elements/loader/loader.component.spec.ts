import { PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticleBackgroundService } from '../../services/particle-background.service';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  const phrase = 'BESPOKE DEVELOPMENT/';
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent]
    })
    .compileComponents();

    jasmine.clock().install();
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);
  });

  afterEach(() => {
    fixture?.destroy();
    jasmine.clock().uninstall();
  });

  function createLoader(): void {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function finishTyping(): void {
    jasmine.clock().tick(phrase.length * 100 + 700);
    fixture.detectChanges();
  }

  function finishPositioning(): void {
    fixture.nativeElement.querySelector('.bracket-piece-right .bracket-artwork').dispatchEvent(
      new TransitionEvent('transitionend', { propertyName: 'transform', bubbles: true })
    );
  }

  function finishCrossfade(): void {
    fixture.nativeElement.querySelector('.bracket-piece-right .bracket-transitioned').dispatchEvent(
      new TransitionEvent('transitionend', { propertyName: 'opacity', bubbles: true })
    );
  }

  function finishMerge(): void {
    fixture.nativeElement.querySelector('.bracket-piece-right').dispatchEvent(
      new TransitionEvent('transitionend', { propertyName: 'transform', bubbles: true })
    );
  }

  function finishBrand(): void {
    fixture.nativeElement.querySelector('.brand-word-right .brand-letter:last-child').dispatchEvent(
      new AnimationEvent('animationend', { bubbles: true })
    );
  }

  it('keeps the final phrase visible until the API is ready', () => {
    createLoader();
    finishTyping();
    jasmine.clock().tick(30000);
    expect(component.typedText()).toBe(phrase);
    expect(component.phase()).toBe('waiting');
    fixture.componentRef.setInput('dataReady', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.typing-line').classList.contains('is-transitioning')).toBeTrue();
    expect(component.typedText()).toBe(phrase);
    jasmine.clock().tick(40);
    expect(component.typedText()).toBe(phrase.slice(0, -1));
  });

  it('waits for the final phrase, erases while morphing, reveals the brand, then holds for three seconds', () => {
    createLoader();
    const completed = jasmine.createSpy('completed');
    component.completed.subscribe(completed);
    fixture.componentRef.setInput('dataReady', true);
    fixture.detectChanges();
    jasmine.clock().tick(100);
    expect(component.typedText()).toBe('B');
    expect(component.phase()).toBe('typing');
    // Account for the first character already typed above.
    jasmine.clock().tick((phrase.length - 1) * 100 + 699);
    fixture.detectChanges();
    expect(component.typedText()).toBe(phrase);
    expect(component.phase()).toBe('typing');
    jasmine.clock().tick(1);
    fixture.detectChanges();
    jasmine.clock().tick(phrase.length * 40);
    expect(component.typedText()).toBe('');
    expect(component.prefix()).toBe("I'M");
    jasmine.clock().tick(3 * 40);
    fixture.detectChanges();
    expect(component.prefix()).toBe('');
    expect(component.phase()).toBe('positioning');
    finishMerge();
    expect(component.phase()).toBe('positioning');
    finishCrossfade();
    expect(component.phase()).toBe('positioning');
    finishPositioning();
    expect(component.phase()).toBe('morphing');
    jasmine.clock().tick(5000);
    expect(completed).not.toHaveBeenCalled();
    finishMerge();
    fixture.detectChanges();
    expect(component.phase()).toBe('branding');
    jasmine.clock().tick(5000);
    expect(completed).not.toHaveBeenCalled();
    fixture.nativeElement.querySelector('.brand-word-right .brand-letter').dispatchEvent(new AnimationEvent('animationend'));
    expect(component.phase()).toBe('branding');
    finishBrand();
    expect(component.phase()).toBe('holding');
    jasmine.clock().tick(2999);
    expect(completed).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(completed).toHaveBeenCalledTimes(1);
  });

  it('cancels the logo hold when the loader is destroyed', () => {
    createLoader();
    const completed = jasmine.createSpy('completed');
    component.completed.subscribe(completed);
    fixture.componentRef.setInput('dataReady', true);
    finishTyping();
    jasmine.clock().tick((phrase.length + 3) * 40);
    fixture.detectChanges();
    finishPositioning();
    finishCrossfade();
    finishMerge();
    fixture.detectChanges();
    finishBrand();
    fixture.destroy();
    jasmine.clock().tick(3000);
    expect(completed).not.toHaveBeenCalled();
  });

  it('stops updating after the loader is destroyed', () => {
    createLoader();
    jasmine.clock().tick(100);
    fixture.destroy();
    jasmine.clock().tick(5000);
    expect(component.typedText()).toBe('B');
  });

  it('positions the artwork, closes the logo, and recolors moving particles in sync with its color reveal', async () => {
    const attach = spyOn(TestBed.inject(ParticleBackgroundService), 'attach').and.callThrough();
    createLoader();
    // Paint the original shapes before advancing the typing clock; otherwise the
    // browser sees only the final CSS values and has no transition to complete.
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const particles = fixture.nativeElement.querySelector('.loader-particles') as HTMLCanvasElement;
    expect(attach).toHaveBeenCalledOnceWith(particles, component.particleOptions());
    const animation = attach.calls.mostRecent().returnValue;
    const destroyParticles = spyOn(animation, 'destroy').and.callThrough();
    const setColors = animation.setColors.bind(animation);
    let paletteChangeTime = 0;
    const recolor = spyOn(animation, 'setColors').and.callFake((colors, duration) => {
      paletteChangeTime = performance.now();
      setColors(colors, duration);
    });
    expect(particles.getAttribute('aria-hidden')).toBe('true');
    expect(getComputedStyle(particles).pointerEvents).toBe('none');
    const context = particles.getContext('2d')!;
    expect(context.fillStyle).toBe('#808080');
    expect(context.getImageData(0, 0, particles.width, particles.height).data
      .some((value, index) => index % 4 === 3 && value > 0)).toBeTrue();
    const completed = jasmine.createSpy('completed');
    component.completed.subscribe(completed);
    fixture.componentRef.setInput('dataReady', true);
    finishTyping();
    const lastLetter = fixture.nativeElement.querySelector('.brand-word-right .brand-letter:last-child');
    const lettersFinished = new Promise<void>(resolve => lastLetter.addEventListener('animationend', () => resolve(), { once: true }));
    const artwork = fixture.nativeElement.querySelector('.bracket-piece-right .bracket-artwork') as HTMLElement;
    const replacement = artwork.querySelector('.bracket-transitioned')!;
    const logoColorStarted = new Promise<number>(resolve => replacement.addEventListener('transitionrun', event => {
      const transition = event as TransitionEvent;
      if (transition.propertyName === 'background-color') resolve(transition.timeStamp);
    }));
    const logoColored = new Promise<number>(resolve => replacement.addEventListener('transitionend', event => {
      const transition = event as TransitionEvent;
      if (transition.propertyName === 'background-color') resolve(transition.timeStamp);
    }));
    const positioned = new Promise<void>(resolve => artwork.addEventListener('transitionend', event => {
      if (event.target === artwork && event.propertyName === 'transform') resolve();
    }));
    const crossfaded = new Promise<void>(resolve => replacement.addEventListener('transitionend', () => resolve(), { once: true }));
    // Let the browser paint the erasing phase so it can interpolate into the joined mark.
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    jasmine.clock().tick(40);
    fixture.detectChanges();
    await positioned;
    expect(component.phase()).toBe('erasing');
    expect(component.typedText()).toBe(phrase.slice(0, -1));
    const verticalPosition = getComputedStyle(artwork).transform;
    const fontSize = parseFloat(getComputedStyle(artwork).fontSize);
    expect(new DOMMatrixReadOnly(verticalPosition).m42).toBeCloseTo(Math.min(30, 0.546 * fontSize), 1);
    jasmine.clock().tick((phrase.length + 3 - 1) * 40);
    fixture.detectChanges();
    expect(component.phase()).toBe('positioning');
    await crossfaded;
    fixture.detectChanges();
    expect(component.phase()).toBe('morphing');
    expect(getComputedStyle(particles).opacity).toBe('1');
    expect(getComputedStyle(artwork).transform).toBe(verticalPosition);
    expect(getComputedStyle(replacement).opacity).toBe('1');
    expect(recolor).not.toHaveBeenCalled();
    const logoColorStart = await logoColorStarted;
    expect(recolor).toHaveBeenCalledOnceWith(component.particleOptions().colors, component.brandRevealDuration);
    expect(Math.abs(paletteChangeTime - logoColorStart)).toBeLessThan(34);
    expect(getComputedStyle(replacement).transitionDuration.split(',')[1].trim()).toBe(`${component.brandRevealDuration / 1000}s`);
    await logoColored;
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    fixture.detectChanges();
    expect(component.phase()).toBe('branding');
    expect(fixture.nativeElement.querySelector('.loader-particles')).toBe(particles);
    expect(getComputedStyle(particles).opacity).toBe('1');
    expect(['#d9719d', '#f7d6a0', '#53bdb3', '#5c4380']).toContain(context.fillStyle as string);
    expect(attach).toHaveBeenCalledTimes(1);
    expect(destroyParticles).not.toHaveBeenCalled();
    await lettersFinished;
    expect(component.phase()).toBe('holding');
    expect(completed).not.toHaveBeenCalled();
    jasmine.clock().tick(3000);
    expect(completed).toHaveBeenCalledTimes(1);
    fixture.destroy();
    expect(destroyParticles).toHaveBeenCalledTimes(1);
  }, 10000);

  it('preserves the PNG silhouettes and dimensions in the vector assets', async () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true })!;
    for (const name of ['bracket-left', 'bracket-right', 'bracket-left-transitioned', 'bracket-right-transitioned']) {
      const images = await Promise.all(['png', 'svg'].map(async extension => {
        const image = new Image();
        image.src = `assets/images/loader/${name}.${extension}`;
        await image.decode();
        return image;
      }));
      expect([images[1].naturalWidth, images[1].naturalHeight])
        .withContext(name).toEqual([images[0].naturalWidth, images[0].naturalHeight]);
      canvas.width = images[0].naturalWidth;
      canvas.height = images[0].naturalHeight;
      const pixels = images.map(image => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0);
        return context.getImageData(0, 0, canvas.width, canvas.height).data;
      });
      let intersection = 0;
      let union = 0;
      let alphaError = 0;
      let originalAlpha = 0;
      for (let index = 3; index < pixels[0].length; index += 4) {
        const original = pixels[0][index];
        const vector = pixels[1][index];
        if (original >= 128 && vector >= 128) intersection++;
        if (original >= 128 || vector >= 128) union++;
        alphaError += Math.abs(original - vector);
        originalAlpha += original;
      }
      expect(intersection / union).withContext(`${name} outline coverage`).toBeGreaterThan(0.985);
      expect(alphaError / originalAlpha).withContext(`${name} edge fidelity`).toBeLessThan(0.03);
    }
  });

  it('keeps the SVG brackets close, centered and clear of every text length across screen sizes', async () => {
    createLoader();
    const frame = document.createElement('iframe');
    frame.style.border = '0';
    document.body.appendChild(frame);

    try {
      const frameDocument = frame.contentDocument!;
      document.querySelectorAll('style').forEach(style => {
        frameDocument.head.appendChild(style.cloneNode(true));
      });
      // Include the app's font CSS without Jasmine's forced viewport scrollbar.
      const appStyles = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'))
        .filter(link => new URL(link.href).pathname.endsWith('/styles.css'));
      await Promise.all(appStyles.map(link => {
        const clone = link.cloneNode(true) as HTMLLinkElement;
        clone.href = link.href;
        return new Promise<void>((resolve, reject) => {
          clone.onload = () => resolve();
          clone.onerror = () => reject(new Error(`Could not load stylesheet ${clone.href}`));
          frameDocument.head.appendChild(clone);
        });
      }));
      await Promise.all([400, 800].map(weight => frameDocument.fonts.load(`${weight} 55px Oxanium`)));
      const loader = fixture.nativeElement.cloneNode(true) as HTMLElement;
      frameDocument.body.appendChild(loader);
      const particles = loader.querySelector<HTMLElement>('.loader-particles')!;
      expect(frame.contentWindow!.getComputedStyle(loader.querySelector('.loading-area')!).backgroundColor).toBe('rgb(21, 21, 21)');
      const brackets = Array.from(loader.querySelectorAll<HTMLImageElement>('.bracket'));
      expect(brackets.length).toBe(2);
      brackets.forEach(bracket => { bracket.src = new URL(bracket.getAttribute('src')!, document.baseURI).href; });
      await Promise.all(brackets.map(bracket => bracket.decode()));
      expect(brackets.every(bracket => bracket.naturalWidth === 416 && bracket.naturalHeight === 461)).toBeTrue();

      const text = loader.querySelector<HTMLElement>('.text')!;
      const copy = loader.querySelector<HTMLElement>('.typing-copy')!;
      const line = loader.querySelector<HTMLElement>('.typing-line')!;
      const pieces = Array.from(loader.querySelectorAll<HTMLElement>('.bracket-artwork'));
      const leftWord = loader.querySelector<HTMLElement>('.brand-word-left')!;
      const rightWord = loader.querySelector<HTMLElement>('.brand-word-right')!;
      const replacements = Array.from(loader.querySelectorAll<HTMLElement>('.bracket-transitioned'));
      const echoes = Array.from(loader.querySelectorAll<HTMLElement>('.bracket-echo'));
      expect(echoes.length).toBe(2);
      await Promise.all(replacements.map(async bracket => {
        const mask = frame.contentWindow!.getComputedStyle(bracket).maskImage;
        const maskUrl = /^url\(["']?(.*?)["']?\)$/.exec(mask)?.[1];
        expect(maskUrl).toBeDefined();
        const image = new Image();
        image.src = maskUrl!;
        await image.decode();
        expect([image.naturalWidth, image.naturalHeight]).toEqual([360, 322]);
      }));
      loader.querySelectorAll<HTMLElement>('.bracket-piece, .bracket-artwork').forEach(piece => { piece.style.transition = 'none'; });
      [...brackets, ...replacements, ...echoes].forEach(bracket => { bracket.style.transition = 'none'; });
      for (const [width, height] of [[280, 640], [320, 568], [390, 844], [768, 1024], [1024, 768], [1440, 900], [667, 320]]) {
        frame.style.width = `${width}px`;
        frame.style.height = `${height}px`;
        const particleBounds = particles.getBoundingClientRect();
        expect([particleBounds.left, particleBounds.top, particleBounds.width, particleBounds.height]).toEqual([0, 0, width, height]);
        line.classList.remove('is-transitioning', 'is-merging', 'is-branded');
        expect(echoes.every(echo => frame.contentWindow!.getComputedStyle(echo).opacity === '0')).toBeTrue();
        for (const word of [phrase]) {
          for (let length = 0; length <= word.length; length++) {
            text.textContent = word.slice(0, length);
            const left = brackets[0].getBoundingClientRect();
            const right = brackets[1].getBoundingClientRect();
            const middle = copy.getBoundingClientRect();
            const row = line.getBoundingClientRect();
            const fontSize = parseFloat(frame.contentWindow!.getComputedStyle(line).fontSize);
            const context = `${width}x${height}, "${text.textContent}"`;

            expect(middle.left - left.right).withContext(context).toBeCloseTo(fontSize * 0.2, 0);
            expect(right.left - middle.right).withContext(context).toBeCloseTo(fontSize * 0.2, 0);
            expect(Math.abs(left.top + left.height / 2 - (middle.top + middle.height / 2))).withContext(context).toBeLessThan(1);
            expect(Math.abs(right.top + right.height / 2 - (middle.top + middle.height / 2))).withContext(context).toBeLessThan(1);
            expect(row.left).withContext(context).toBeGreaterThanOrEqual(0);
            expect(row.right).withContext(context).toBeLessThanOrEqual(width);
            expect(Math.abs(row.left + row.width / 2 - width / 2)).withContext(context).toBeLessThan(1);
          }
        }
        // Morphing starts while the final word is still present, without entering the text.
        line.classList.add('is-transitioning');
        const erasingFontSize = parseFloat(frame.contentWindow!.getComputedStyle(line).fontSize);
        const erasingCopy = copy.getBoundingClientRect();
        expect(erasingCopy.left - pieces[0].getBoundingClientRect().right).toBeCloseTo(erasingFontSize * 0.1, 0);
        expect(pieces[1].getBoundingClientRect().left - erasingCopy.right).toBeCloseTo(erasingFontSize * 0.1, 0);
        expect(frame.contentWindow!.getComputedStyle(replacements[0]).opacity).toBe('1');
        expect(frame.contentWindow!.getComputedStyle(text).fontWeight).toBe(frame.contentWindow!.getComputedStyle(line).fontWeight);
        text.textContent = '';
        line.classList.add('is-transitioning', 'is-merging', 'is-branded');
        const left = pieces[0].getBoundingClientRect();
        const right = pieces[1].getBoundingClientRect();
        const fontSize = parseFloat(frame.contentWindow!.getComputedStyle(line).fontSize);
        expect(left.right - right.left).withContext(`Logo overlap at ${width}px`).toBeCloseTo(left.width * 0.8, 0);
        expect(right.top - left.top).withContext(`Logo vertical offsets at ${width}px`).toBeCloseTo(2 * Math.min(30, 0.546 * fontSize), 0);
        expect(frame.contentWindow!.getComputedStyle(brackets[0]).opacity).toBe('0');
        expect(frame.contentWindow!.getComputedStyle(replacements[0]).opacity).toBe('1');
        echoes.forEach((echo, index) => {
          const echoBox = echo.getBoundingClientRect();
          const originalBox = replacements[index].getBoundingClientRect();
          expect(frame.contentWindow!.getComputedStyle(echo).maskImage).toBe(frame.contentWindow!.getComputedStyle(replacements[index]).maskImage);
          expect(frame.contentWindow!.getComputedStyle(echo).opacity).toBe('1');
          expect(frame.contentWindow!.getComputedStyle(echo).backgroundColor).toBe(index === 0 ? 'rgb(217, 113, 157)' : 'rgb(92, 67, 128)');
          expect(frame.contentWindow!.getComputedStyle(replacements[index]).backgroundColor).toBe(index === 0 ? 'rgb(247, 214, 160)' : 'rgb(83, 189, 179)');
          expect(echoBox.top - originalBox.top).toBeCloseTo(index === 0 ? -25 : 25, 0);
          expect(echoBox.left).toBeCloseTo(originalBox.left, 0);
          expect(echoBox.width).toBeCloseTo(originalBox.width, 0);
          expect(echoBox.top).toBeGreaterThanOrEqual(0);
          expect(echoBox.bottom).toBeLessThanOrEqual(height);
        });
        expect(left.left).toBeGreaterThanOrEqual(0);
        expect(right.right).toBeLessThanOrEqual(width);
        const before = leftWord.getBoundingClientRect();
        const after = rightWord.getBoundingClientRect();
        const markCenterY = (left.top + right.bottom) / 2;
        expect(before.right).toBeLessThan(left.left);
        expect(after.left).toBeGreaterThan(right.right);
        expect(before.left).toBeGreaterThanOrEqual(0);
        expect(after.right).toBeLessThanOrEqual(width);
        expect(Math.abs(before.top + before.height / 2 - markCenterY)).toBeLessThan(1);
        expect(Math.abs(after.top + after.height / 2 - markCenterY)).toBeLessThan(1);
        expect(frame.contentWindow!.getComputedStyle(leftWord).fontFamily).toContain('Oxanium');
        expect(frame.contentWindow!.getComputedStyle(leftWord).fontWeight).toBe(frame.contentWindow!.getComputedStyle(line).fontWeight);
        expect(leftWord.textContent!.replace(/\s/g, '')).toBe('DEV');
        expect(rightWord.textContent!.replace(/\s/g, '')).toBe('ENSE');
        const delays = (word: HTMLElement) => Array.from(word.children).map(letter => frame.contentWindow!.getComputedStyle(letter).animationDelay);
        expect(delays(leftWord)).toEqual(['1.1s', '0.8s', '0.5s']);
        expect(delays(rightWord)).toEqual(['0.5s', '0.8s', '1.1s', '1.4s']);
      }
    } finally {
      frame.remove();
    }
  });

  it('shows static text for reduced motion', () => {
    (window.matchMedia as jasmine.Spy).and.returnValue({ matches: true } as MediaQueryList);
    createLoader();
    expect(fixture.nativeElement.querySelector('.loader-particles')).toBeNull();
    expect(component.typedText()).toBe(phrase);
    jasmine.clock().tick(5000);
    expect(component.typedText()).toBe(phrase);
    const completed = jasmine.createSpy('completed');
    component.completed.subscribe(completed);
    fixture.componentRef.setInput('dataReady', true);
    fixture.detectChanges();
    expect(component.phase()).toBe('holding');
    jasmine.clock().tick(3000);
    expect(completed).toHaveBeenCalledTimes(1);
  });

  it('does not start a browser animation during server rendering', () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    createLoader();
    jasmine.clock().tick(5000);
    expect(component.typedText()).toBe('');
    expect(window.matchMedia).not.toHaveBeenCalled();
  });
});
