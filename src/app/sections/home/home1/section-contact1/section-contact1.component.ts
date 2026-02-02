import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-contact1',
    templateUrl: './section-contact1.component.html',
    styleUrls: ['./section-contact1.component.scss'],
    standalone: true
})
export class SectionContact1Component implements OnInit {

  readonly data = input<any>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

}
