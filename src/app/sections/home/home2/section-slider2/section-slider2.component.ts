
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-section-slider2',
  templateUrl: './section-slider2.component.html',
  styleUrls: ['./section-slider2.component.scss'],
  imports: [RouterLink]
})
export class SectionSlider2Component {
  wpService = inject(WordpressService);

  readonly data = input<any>();

  constructor() { }

}
