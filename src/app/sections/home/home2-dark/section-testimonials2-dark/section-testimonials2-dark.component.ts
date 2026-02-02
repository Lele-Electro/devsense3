import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-testimonials2-dark',
    templateUrl: './section-testimonials2-dark.component.html',
    styleUrls: ['./section-testimonials2-dark.component.scss'],
    standalone: false
})
export class SectionTestimonials2DarkComponent implements OnInit {

  readonly data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
