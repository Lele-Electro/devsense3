import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-branding',
  templateUrl: './section-branding.component.html',
  styleUrls: ['./section-branding.component.css']
})
export class SectionBrandingComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
