import { Directive, ElementRef, NgZone, afterRenderEffect, computed, inject, input } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
  host: { '[textContent]': 'formattedTarget()' }
})
export class CountUpDirective {
  readonly appCountUp = input.required<number>();
  readonly countUpDigits = input(1);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly target = computed(() => {
    const value = this.appCountUp();
    return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  });
  readonly formattedTarget = computed(() => String(this.target()).padStart(this.countUpDigits(), '0'));

  constructor() {
    // Browser-only rendering hook also restarts safely when asynchronous data changes.
    afterRenderEffect(onCleanup => {
      const target = this.target();
      const digits = this.countUpDigits();
      const element = this.element.nativeElement;

      this.zone.runOutsideAngular(() => {
        let observer: IntersectionObserver | undefined;
        let frame: number | undefined;
        let started = false;
        let destroyed = false;
        const render = (value: number) => {
          element.textContent = String(value).padStart(digits, '0');
        };

        onCleanup(() => {
          destroyed = true;
          observer?.disconnect();
          if (frame !== undefined) cancelAnimationFrame(frame);
        });

        // Keep the final value readable when motion is disabled or observation is unavailable.
        if (!target || window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            typeof IntersectionObserver === 'undefined') {
          render(target);
          return;
        }

        render(0);
        observer = new IntersectionObserver(entries => {
          if (destroyed || started || !entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.4)) return;
          started = true;
          observer?.disconnect();
          let start: number | undefined;
          const tick = (timestamp: number) => {
            if (destroyed) return;
            start ??= timestamp;
            const progress = Math.min((timestamp - start) / 2000, 1);
            render(Math.floor(target * progress));
            frame = progress < 1 ? requestAnimationFrame(tick) : undefined;
          };
          frame = requestAnimationFrame(tick);
        }, { threshold: 0.4 });
        observer.observe(element);
      });
    });
  }
}
