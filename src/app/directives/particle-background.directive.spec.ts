import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ParticleBackgroundDirective } from './particle-background.directive';
import { ParticleBackgroundOptions, ParticleBackgroundService } from '../services/particle-background.service';

@Component({
  imports: [ParticleBackgroundDirective],
  template: '@if (visible()) { <canvas [appParticleBackground]="options()"></canvas> }'
})
class ParticleHostComponent {
  readonly visible = signal(true);
  readonly options = signal<ParticleBackgroundOptions>({ count: 20, color: 'var(--particle-colour, #5C4380)' });
}

describe('ParticleBackgroundDirective', () => {
  it('updates options and cleans up when a conditional canvas is removed', async () => {
    const first = { destroy: jasmine.createSpy('destroy first'), setColors: jasmine.createSpy('setColors first') };
    const second = { destroy: jasmine.createSpy('destroy second'), setColors: jasmine.createSpy('setColors second') };
    const attach = jasmine.createSpy('attach').and.returnValues(first, second);
    TestBed.configureTestingModule({
      imports: [ParticleHostComponent],
      providers: [{ provide: ParticleBackgroundService, useValue: { attach } }]
    });
    const fixture = TestBed.createComponent(ParticleHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const canvas: HTMLCanvasElement = fixture.nativeElement.querySelector('canvas');
    expect(attach).toHaveBeenCalledOnceWith(canvas, { count: 20, color: 'var(--particle-colour, #5C4380)' });
    expect(canvas.getAttribute('aria-hidden')).toBe('true');
    expect(canvas.style.pointerEvents).toBe('none');

    fixture.componentInstance.options.set({ count: 20, colors: ['#D9719D', '#53BDB3'], colorTransitionDuration: 500 });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(first.setColors).toHaveBeenCalledOnceWith(['#D9719D', '#53BDB3'], 500);
    expect(first.destroy).not.toHaveBeenCalled();
    expect(attach).toHaveBeenCalledTimes(1);

    fixture.componentInstance.options.set({ count: 40, color: '#ff0000' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(first.destroy).toHaveBeenCalledTimes(1);
    expect(attach).toHaveBeenCalledWith(canvas, { count: 40, color: '#ff0000' });

    fixture.componentInstance.visible.set(false);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(second.destroy).toHaveBeenCalledTimes(1);
    expect(fixture.nativeElement.querySelector('canvas')).toBeNull();
    fixture.destroy();
    expect(second.destroy).toHaveBeenCalledTimes(1);
  });
});
