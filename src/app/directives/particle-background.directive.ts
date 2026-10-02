import { DestroyRef, Directive, ElementRef, afterRenderEffect, inject, input } from '@angular/core';
import { ParticleBackgroundOptions, ParticleBackgroundRef, ParticleBackgroundService } from '../services/particle-background.service';

@Directive({
  selector: 'canvas[appParticleBackground]',
  standalone: true,
  host: {
    'aria-hidden': 'true',
    '[style.position]': '"absolute"',
    '[style.top]': '"0"',
    '[style.left]': '"0"',
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
    '[style.display]': '"block"',
    '[style.pointer-events]': '"none"'
  }
})
export class ParticleBackgroundDirective {
  readonly appParticleBackground = input<ParticleBackgroundOptions | ''>('');
  private readonly canvas = inject<ElementRef<HTMLCanvasElement>>(ElementRef);
  private readonly particles = inject(ParticleBackgroundService);
  private animation?: ParticleBackgroundRef;
  private previousOptions?: ParticleBackgroundOptions;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.animation?.destroy());
    afterRenderEffect(() => {
      const options = this.appParticleBackground() || {};
      const previous = this.previousOptions;
      if (this.animation && previous && options.count === previous.count && options.speed === previous.speed &&
          options.connectionDistance === previous.connectionDistance && options.borderTarget === previous.borderTarget) {
        // A palette change must not reset particle positions or create another animation loop.
        this.animation.setColors(options.colors?.length ? options.colors : options.color, options.colorTransitionDuration);
      } else {
        this.animation?.destroy();
        this.animation = this.particles.attach(this.canvas.nativeElement, options);
      }
      this.previousOptions = options;
    });
  }
}
