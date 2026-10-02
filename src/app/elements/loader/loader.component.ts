import { isPlatformBrowser } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit, PLATFORM_ID, computed, effect, inject, input, output, signal } from '@angular/core';
import { ParticleBackgroundDirective } from '../../directives/particle-background.directive';
import { ParticleBackgroundOptions } from '../../services/particle-background.service';

type LoaderPhase = 'typing' | 'waiting' | 'erasing' | 'positioning' | 'morphing' | 'branding' | 'holding' | 'complete';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [ParticleBackgroundDirective],
  standalone: true
})
export class LoaderComponent implements OnInit, OnDestroy {
  readonly dataReady = input(false);
  readonly completed = output<void>();
  readonly typedText = signal('');
  readonly prefix = signal("I'M");
  readonly phase = signal<LoaderPhase>('typing');
  readonly particlesVisible = signal(true);
  readonly isTransitioning = computed(() => ['erasing', 'positioning', 'morphing', 'branding', 'holding', 'complete'].includes(this.phase()));
  readonly isMerging = computed(() => ['morphing', 'branding', 'holding', 'complete'].includes(this.phase()));
  readonly showBrand = computed(() => ['branding', 'holding', 'complete'].includes(this.phase()));
  readonly brandRevealDuration = 500;
  readonly particleOptions = computed<ParticleBackgroundOptions>(() => ({
    color: '#808080',
    colors: this.showBrand() ? [
      'var(--chinese-pink, #D9719D)',
      'var(--deep-champagne, #F7D6A0)',
      'var(--verdigris, #53BDB3)',
      'var(--cyber-grape, #5C4380)'
    ] : undefined,
    colorTransitionDuration: this.brandRevealDuration
  }));
  readonly brandLeft = ['D', 'E', 'V'];
  readonly brandRight = ['E', 'N', 'S', 'E'];

  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly words = ['BESPOKE DEVELOPMENT/'];
  private wordIndex = 0;
  private characterIndex = 0;
  private deleting = false;
  private reducedMotion = false;
  private artworkPositioned = false;
  private artworkCrossfaded = false;
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      if (this.dataReady() && this.phase() === 'waiting') {
        this.phase.set('erasing');
        if (this.reducedMotion) {
          this.typedText.set('');
          this.prefix.set('');
          this.beginMerge();
        } else {
          this.schedule(() => this.eraseFinalText(), 40);
        }
      }
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.reducedMotion) {
      this.particlesVisible.set(false);
      this.typedText.set(this.words[this.words.length - 1]);
      this.phase.set('waiting');
      return;
    }

    // Animation timers must not keep Angular waiting for app stability.
    this.scheduleNextCharacter(100);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private scheduleNextCharacter(delay: number): void {
    this.schedule(() => {
      const word = this.words[this.wordIndex];
      this.characterIndex += this.deleting ? -1 : 1;
      this.typedText.set(word.slice(0, this.characterIndex));

      let nextDelay = this.deleting ? 40 : 100;
      if (!this.deleting && this.characterIndex === word.length) {
        if (this.wordIndex === this.words.length - 1) {
          // Keep the final phrase readable, then wait here if the API is still loading.
          this.schedule(() => this.phase.set('waiting'), 700);
          return;
        }
        this.deleting = true;
        nextDelay = 700;
      } else if (this.deleting && this.characterIndex === 0) {
        this.deleting = false;
        this.wordIndex++;
        nextDelay = 100;
      }

      this.scheduleNextCharacter(nextDelay);
    }, delay);
  }

  private eraseFinalText(): void {
    if (this.typedText().length) {
      this.typedText.update(text => text.slice(0, -1));
    } else if (this.prefix().length) {
      this.prefix.update(text => text.slice(0, -1));
    }

    if (this.typedText().length || this.prefix().length) {
      this.schedule(() => this.eraseFinalText(), 40);
    } else {
      this.beginMerge();
    }
  }

  private beginMerge(): void {
    // Finish the shape change and vertical alignment before allowing any overlap.
    if (!this.reducedMotion && (!this.artworkPositioned || !this.artworkCrossfaded)) {
      this.phase.set('positioning');
      return;
    }
    this.phase.set('morphing');
    if (this.reducedMotion) this.revealBrand();
  }

  onArtworkPositioned(event: TransitionEvent): void {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
    this.artworkPositioned = true;
    if (this.phase() === 'positioning') this.beginMerge();
  }

  onArtworkCrossfaded(event: TransitionEvent): void {
    if (event.target !== event.currentTarget || event.propertyName !== 'opacity') return;
    this.artworkCrossfaded = true;
    if (this.phase() === 'positioning') this.beginMerge();
  }

  onMergeTransitionEnd(event: TransitionEvent): void {
    // Ignore the image opacity events bubbling up from the crossfade layers.
    if (event.target === event.currentTarget && event.propertyName === 'transform' && this.phase() === 'morphing') {
      this.revealBrand();
    }
  }

  private revealBrand(): void {
    this.phase.set('branding');
    if (this.reducedMotion) this.holdLogo();
  }

  onBrandLetterAnimationEnd(event: AnimationEvent, index: number): void {
    // The outermost right E is the last letter to finish fading in.
    if (event.target === event.currentTarget && index === this.brandRight.length - 1 && this.phase() === 'branding') {
      this.holdLogo();
    }
  }

  private holdLogo(): void {
    this.phase.set('holding');
    this.schedule(() => {
      this.phase.set('complete');
      this.completed.emit();
    }, 3000);
  }

  private schedule(callback: () => void, delay: number): void {
    clearTimeout(this.timer);
    this.zone.runOutsideAngular(() => {
      this.timer = setTimeout(() => this.zone.run(callback), delay);
    });
  }
}
