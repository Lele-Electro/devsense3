import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-testimonials1-dark',
    templateUrl: './section-testimonials1-dark.component.html',
    styleUrls: ['./section-testimonials1-dark.component.scss'],
    standalone: false
})
export class SectionTestimonials1DarkComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
