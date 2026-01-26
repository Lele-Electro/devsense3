import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-testimonials2',
  templateUrl: './section-testimonials2.component.html',
  styleUrls: ['./section-testimonials2.component.css']
})
export class SectionTestimonials2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
