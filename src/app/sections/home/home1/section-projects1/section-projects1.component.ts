import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-projects1',
    templateUrl: './section-projects1.component.html',
    styleUrls: ['./section-projects1.component.scss'],
    standalone: true
})
export class SectionProjects1Component implements OnInit {

  readonly data = input<any>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

}
