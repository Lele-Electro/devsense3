import { Component, DOCUMENT, DestroyRef, ElementRef, OnInit, afterNextRender, inject, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParticleBackgroundDirective } from 'src/app/directives/particle-background.directive';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
  imports: [RouterLink, ParticleBackgroundDirective]
})
export class Header2Component implements OnInit {
  readonly particleColor = input(' #38185c79');
  // Off by default; a page can still opt in with [particlesEnabled]="true".
  readonly particlesEnabled = input(false);
  readonly backgroundColor = input<string>();

  private readonly siteHeader = viewChild.required<ElementRef<HTMLElement>>('siteHeader');

  constructor() {
    const document = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);

    // Publish the header's height so inner-page banners can extend up behind it.
    afterNextRender(() => {
      const header = this.siteHeader().nativeElement;
      const publish = () => document.documentElement.style.setProperty(
        '--site-header-height', `${header.getBoundingClientRect().height}px`
      );
      publish();
      const observer = new ResizeObserver(publish);
      observer.observe(header);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  ngOnInit(): void {
  }

}
