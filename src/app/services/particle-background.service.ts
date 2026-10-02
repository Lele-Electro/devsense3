import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';

export interface ParticleBackgroundOptions {
  /** Number of particles. Defaults to 80; zero disables drawing. */
  count?: number;
  /** CSS colour or var(...) expression, resolved in the canvas's scope. Defaults to the purple theme colour. */
  color?: string;
  /** Random per-particle palette. A non-empty palette takes precedence over color. */
  colors?: readonly string[];
  /** Duration in milliseconds for live palette changes, using CSS ease-out. Defaults to 0. */
  colorTransitionDuration?: number;
  /** Movement multiplier. Defaults to 1; zero keeps particles stationary. */
  speed?: number;
  /** Maximum connection length in pixels. Defaults to 120; zero disables lines. */
  connectionDistance?: number;
  /** Draw only over this element's CSS border. Omit for a full background. */
  borderTarget?: HTMLElement;
}

export interface ParticleBackgroundRef {
  /** Recolor existing particles without restarting their motion. Empty palettes use the theme default. */
  setColors(colors?: string | readonly string[], durationMs?: number): void;
  /** Stop this canvas, disconnect its observer, and clear its drawing. */
  destroy(): void;
}

type ParticleColor = readonly [number, number, number, number];

const colorStyle = (color: ParticleColor): string => `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;

// Match CSS ease-out (cubic-bezier(0, 0, 0.58, 1)) for synchronized DOM/canvas reveals.
function easeOut(progress: number): number {
  let low = 0;
  let high = 1;
  for (let step = 0; step < 14; step++) {
    const t = (low + high) / 2;
    const x = 3 * 0.58 * (1 - t) * t * t + t * t * t;
    if (x < progress) low = t;
    else high = t;
  }
  const t = (low + high) / 2;
  return 3 * (1 - t) * t * t + t * t * t;
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  readonly size = Math.random() * 3 + 2;
  fromColor: ParticleColor;
  targetColor: ParticleColor;

  constructor(width: number, height: number, speed: number, public color: ParticleColor) {
    this.fromColor = this.targetColor = color;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * speed;
    this.vy = (Math.random() - 0.5) * speed;
  }

  update(width: number, height: number): void {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
    this.x = Math.max(0, Math.min(width, this.x));
    this.y = Math.max(0, Math.min(height, this.y));
  }
}

@Injectable({ providedIn: 'root' })
export class ParticleBackgroundService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly ngZone = inject(NgZone);
  private readonly instances = new WeakMap<HTMLCanvasElement, ParticleBackgroundRef>();

  /**
   * Attach an independent animation to an existing canvas. The caller owns its
   * layout and must destroy the returned reference when the canvas is removed.
   * Prefer ParticleBackgroundDirective for automatic Angular lifecycle handling.
   */
  attach(canvas: HTMLCanvasElement, options: ParticleBackgroundOptions = {}): ParticleBackgroundRef {
    const browserWindow = this.document.defaultView;
    if (!isPlatformBrowser(this.platformId) || !browserWindow) {
      return { setColors: () => { }, destroy: () => { } };
    }

    this.instances.get(canvas)?.destroy();
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return { setColors: () => { }, destroy: () => { } };
    }

    const count = Math.max(0, Math.floor(options.count ?? 80));
    let palette = this.resolvePalette(canvas, browserWindow, options.colors?.length ? options.colors : options.color);
    const speed = Math.max(0, options.speed ?? 1);
    const connectionDistance = Math.max(0, options.connectionDistance ?? 120);
    const borderTarget = options.borderTarget;

    return this.ngZone.runOutsideAngular(() => {
      let particles: Particle[] = [];
      let animationId: number | undefined;
      let destroyed = false;
      let colorTransitionStart: number | undefined;
      let colorTransitionDuration = 0;
      let previousWidth = 0;
      let previousHeight = 0;
      const randomColor = () => palette[Math.floor(Math.random() * palette.length)];

      const updateColors = (now: number) => {
        if (colorTransitionStart === undefined) return;
        const progress = colorTransitionDuration ? Math.max(0, Math.min(1, (now - colorTransitionStart) / colorTransitionDuration)) : 1;
        const amount = progress === 0 || progress === 1 ? progress : easeOut(progress);
        for (const particle of particles) {
          const from = particle.fromColor;
          const to = particle.targetColor;
          particle.color = [
            from[0] + (to[0] - from[0]) * amount,
            from[1] + (to[1] - from[1]) * amount,
            from[2] + (to[2] - from[2]) * amount,
            from[3] + (to[3] - from[3]) * amount
          ];
        }
        if (progress === 1) colorTransitionStart = undefined;
      };

      const stop = () => {
        if (animationId !== undefined) {
          browserWindow.cancelAnimationFrame(animationId);
          animationId = undefined;
        }
      };

      const animate = (now = browserWindow.performance.now()) => {
        if (destroyed) return;
        updateColors(now);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.3;
        ctx.shadowBlur = 5;

        for (const particle of particles) {
          ctx.fillStyle = ctx.shadowColor = colorStyle(particle.color);
          particle.update(canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0;
        ctx.strokeStyle = colorStyle(palette[0]);
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
            if (distance >= connectionDistance) continue;
            // Connections follow their source particle's smoothly changing color.
            ctx.strokeStyle = colorStyle(particles[i].color);
            ctx.globalAlpha = (1 - distance / connectionDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
        animationId = browserWindow.requestAnimationFrame(animate);
      };

      const resize = () => {
        if (destroyed) return;
        stop();
        // Reset the bitmap and clip so no old pixels survive a mode/size change.
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        if (!canvas.width || !canvas.height || !count) return;

        if (borderTarget) {
          const style = browserWindow.getComputedStyle(borderTarget);
          const top = parseFloat(style.borderTopWidth);
          const right = parseFloat(style.borderRightWidth);
          const bottom = parseFloat(style.borderBottomWidth);
          const left = parseFloat(style.borderLeftWidth);
          // Pause when the responsive layout removes the frame.
          if (!(top + right + bottom + left)) return;

          const targetBox = borderTarget.getBoundingClientRect();
          const canvasBox = canvas.getBoundingClientRect();
          const x = targetBox.left - canvasBox.left;
          const y = targetBox.top - canvasBox.top;
          ctx.beginPath();
          ctx.rect(x, y, targetBox.width, targetBox.height);
          ctx.rect(x + left, y + top, Math.max(0, targetBox.width - left - right), Math.max(0, targetBox.height - top - bottom));
          // Clip particles, their glow, and connecting lines together.
          ctx.clip('evenodd');
        }

        if (particles.length) {
          // Keep palette assignments and in-progress color transitions when resizing.
          for (const particle of particles) {
            particle.x *= canvas.width / previousWidth;
            particle.y *= canvas.height / previousHeight;
          }
        } else {
          particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height, speed, randomColor()));
        }
        previousWidth = canvas.width;
        previousHeight = canvas.height;
        animate();
      };

      const observer = new ResizeObserver(resize);
      const ref: ParticleBackgroundRef = {
        setColors: (colors, durationMs = 0) => {
          if (destroyed) return;
          const nextPalette = this.resolvePalette(canvas, browserWindow, colors);
          if (nextPalette.length === palette.length && nextPalette.every((color, index) =>
            color.every((channel, channelIndex) => channel === palette[index][channelIndex])
          )) return;

          const now = browserWindow.performance.now();
          updateColors(now);
          palette = nextPalette;
          for (const particle of particles) {
            particle.fromColor = particle.color;
            particle.targetColor = randomColor();
          }
          colorTransitionDuration = Number.isFinite(durationMs) ? Math.max(0, durationMs) : 0;
          colorTransitionStart = now;
          updateColors(now);
        },
        destroy: () => {
          if (destroyed) return;
          destroyed = true;
          stop();
          observer.disconnect();
          particles = [];
          // Resetting width clears pixels and removes any border clip.
          canvas.width = canvas.width;
          this.instances.delete(canvas);
        }
      };

      this.instances.set(canvas, ref);
      observer.observe(canvas);
      if (borderTarget && borderTarget !== canvas) observer.observe(borderTarget);
      resize();
      return ref;
    });
  }

  private resolvePalette(canvas: HTMLCanvasElement, browserWindow: Window, colors?: string | readonly string[]): ParticleColor[] {
    const values = typeof colors === 'string' ? [colors] : colors?.length ? colors : [undefined];
    // Let the browser normalize any CSS color syntax, including alpha and CSS variables.
    const pixel = this.document.createElement('canvas');
    pixel.width = pixel.height = 1;
    const context = pixel.getContext('2d', { willReadFrequently: true })!;
    return values.map(value => {
      context.clearRect(0, 0, 1, 1);
      context.fillStyle = this.resolveColor(canvas, browserWindow, value);
      context.fillRect(0, 0, 1, 1);
      const [red, green, blue, alpha] = context.getImageData(0, 0, 1, 1).data;
      return [red, green, blue, alpha / 255];
    });
  }

  private resolveColor(canvas: HTMLCanvasElement, browserWindow: Window, color?: string): string {
    // Canvas drawing APIs do not resolve CSS variables. Let the browser resolve
    // them in this canvas's scope without changing its own colour or styles.
    const probe = this.document.createElement('span');
    probe.style.setProperty('color', color ?? 'var(--cyber-grape-particle-animation, #5C4380)', 'important');
    probe.style.setProperty('display', 'none', 'important');
    canvas.appendChild(probe);
    try {
      return browserWindow.getComputedStyle(probe).color || '#5C4380';
    } finally {
      probe.remove();
    }
  }
}
