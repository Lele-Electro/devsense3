import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-testimonials1-dark',
    templateUrl: './section-testimonials1-dark.component.html',
    styleUrls: ['./section-testimonials1-dark.component.scss'],
    standalone: false
})
export class SectionTestimonials1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
