# Reusable particle backgrounds

`ParticleBackgroundService` owns the canvas animation. The standalone
`ParticleBackgroundDirective` injects that service and handles rendering, option
changes, resizing, and cleanup. Import the directive into any standalone component
or NgModule that uses it; consuming components do not need their own service injection.

## Template usage

```ts
import { Component } from '@angular/core';
import { ParticleBackgroundDirective } from 'src/app/directives/particle-background.directive';

@Component({
  selector: 'app-particle-section',
  imports: [ParticleBackgroundDirective],
  template: `
    <section class="particle-section">
      <canvas appParticleBackground></canvas>
      <div class="content">Your section content</div>
    </section>
  `,
  styles: `
    .particle-section {
      position: relative;
      isolation: isolate;
      background: #302040;
      padding: 4rem 2rem;
    }
    .content { position: relative; z-index: 1; }
  `
})
export class ParticleSectionComponent {}
```

The canvas fills its positioned parent. Give that parent height through content,
padding, or `min-height`. The directive makes the canvas decorative and lets pointer
events pass through. Use your own background colour and content stacking as above.

Bind an options object to customise an instance:

```html
<canvas [appParticleBackground]="{
  count: 60,
  color: '#64ffda',
  speed: 0.6,
  connectionDistance: 140
}"></canvas>
```

| Option | Default | Meaning |
| --- | --- | --- |
| `count` | `80` | Non-negative particle count; `0` stops drawing. |
| `color` | `'var(--cyber-grape-particle-animation, #5C4380)'` | CSS colour for particles, glow, and connections; supports `var(...)` in the canvas's scope. |
| `colors` | omitted | Palette of CSS colours. Each particle randomly selects one and keeps it until the palette changes. A non-empty array takes precedence over `color`; an empty array falls back to `color`. |
| `colorTransitionDuration` | `0` | Milliseconds to blend from the current colours to a new palette using CSS `ease-out`. Applies to live colour changes, including glow and connecting lines. |
| `speed` | `1` | Non-negative movement multiplier; `0` creates a stationary field. |
| `connectionDistance` | `120` | Connection distance in pixels; `0` removes lines. |
| `borderTarget` | omitted | Optional element whose CSS border limits the drawing. |

Replace a bound options object when changing settings, or update an options signal.
Each canvas has independent animation state. The service runs its loop outside
Angular's zone, and browser rendering hooks keep the directive inactive during SSR.

## Different colours per component

Pass any CSS colour, such as `'#53BDB3'`, `'white'`, or
`'var(--section-particle-colour, #5C4380)'`, through the `color` option. CSS variables
are resolved from the canvas and its ancestors, so a section can override its own
colour without affecting another instance. Colours are resolved when attaching or
updating a palette; replace the bound options object to apply later changes to theme variables.

The header and home slider expose a `particleColor` input for their own canvases:

```html
<app-header2 particleColor="#53BDB3"></app-header2>
<app-section-slider2 particleColor="#5C4380"></app-section-slider2>
```

Without an explicit input, the header uses
`var(--header-particle-animation, #53BDB3)` and the slider uses
`var(--cyber-grape-particle-animation, #5C4380)`. These theme variables are defined
in `src/assets/css/variables.scss`. You can also pass a scoped CSS variable through
either component's `particleColor` input. Changing colours preserves the canvas's
particle positions and motion. Changes to count, speed, connection distance, or border target
restart that instance.

Both components also accept `particlesEnabled` (default `true`) and an optional
`backgroundColor`. The `app-page-home2` header and slider use a solid grey surround
without creating a particle canvas:

```html
<app-header2 backgroundColor="#212121" [particlesEnabled]="false"></app-header2>
<app-section-slider2 backgroundColor="#212121" [particlesEnabled]="false"></app-section-slider2>
```

The background override applies to the header (including its sticky bar) and the
slider's background and border frame.

## Multiple colours and live transitions

```html
<canvas [appParticleBackground]="{
  colors: ['#D9719D', '#F7D6A0', '#53BDB3', '#5C4380'],
  colorTransitionDuration: 500
}"></canvas>
```

Replace the options object (or use a computed signal) to switch palettes. Existing
particles blend from their current colour to a randomly selected colour in the new
palette without restarting their movement. Colours remain stable between frames,
and resizing preserves their assignments and any transition already in progress.
Retargeting during a transition begins from the current blended colours.

The loader starts with grey particles and switches to the logo's four theme colours
when the logo begins its colour reveal. The canvas transition and logo CSS share the
loader's `brandRevealDuration` of 500 ms and `ease-out` easing. Coloured particles
remain visible until the loader is removed; reduced-motion users receive no canvas.

Direct service callers can use `animation.setColors(palette, 500)` on the returned
reference. A string sets a single colour; an empty array or omitted colour restores
the theme default. An omitted duration applies the change on the next frame.

## Border-only usage

```html
<section class="particle-section">
  <div #frame class="frame">Your video or other content</div>
  <canvas [appParticleBackground]="{ borderTarget: frame }"></canvas>
</section>
```

Give `.frame` the desired CSS border. Place the canvas outside a frame that uses
`overflow: hidden`, as in the home slider. Set its `z-index` above the frame when
needed. Drawing is clipped to the border, including connecting lines and glow.
When responsive CSS removes the border, drawing pauses until the frame returns.
Use untransformed elements for the canvas and border target so CSS and canvas
coordinates agree.

## Calling the injected service directly

For custom canvas ownership, inject the service and attach after rendering:

```ts
import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { ParticleBackgroundService } from '@devsense/services';

@Component({
  selector: 'app-custom-particles',
  template: '<canvas #canvas style="display:block;width:100%;height:300px"></canvas>'
})
export class CustomParticlesComponent {
  private readonly particles = inject(ParticleBackgroundService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  constructor() {
    afterNextRender(() => {
      const animation = this.particles.attach(this.canvas().nativeElement, { count: 50 });
      this.destroyRef.onDestroy(() => animation.destroy());
    });
  }
}
```

Direct callers own canvas layout, accessibility, and cleanup. `destroy()` is safe
to call repeatedly. Attaching to the same canvas replaces its previous animation;
other canvases remain unaffected. Do not attach manually to a canvas already owned
by the directive. Direct `attach()` calls are also safe on the server and do nothing.
