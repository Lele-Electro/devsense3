import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'safe',
    standalone: true
})
export class SafePipe implements PipeTransform {
  private domSanitizer = inject(DomSanitizer);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);


  constructor() {}
  transform(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
