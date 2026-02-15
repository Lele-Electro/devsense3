import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-branding',
    templateUrl: './section-branding.component.html',
    styleUrls: ['./section-branding.component.scss'],
    imports: [RouterLink]
})
export class SectionBrandingComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
