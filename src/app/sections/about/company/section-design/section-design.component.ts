import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-design',
    templateUrl: './section-design.component.html',
    styleUrls: ['./section-design.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class SectionDesignComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
