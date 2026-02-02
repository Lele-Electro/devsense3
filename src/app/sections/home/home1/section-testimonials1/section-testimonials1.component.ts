import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-testimonials1',
    templateUrl: './section-testimonials1.component.html',
    styleUrls: ['./section-testimonials1.component.scss'],
    standalone: true
})
export class SectionTestimonials1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
