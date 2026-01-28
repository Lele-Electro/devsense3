import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-testimonials2-dark',
  templateUrl: './section-testimonials2-dark.component.html',
  styleUrls: ['./section-testimonials2-dark.component.scss']
})
export class SectionTestimonials2DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
