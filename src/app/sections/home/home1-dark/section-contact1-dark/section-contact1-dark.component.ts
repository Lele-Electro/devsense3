import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-contact1-dark',
  templateUrl: './section-contact1-dark.component.html',
  styleUrls: ['./section-contact1-dark.component.css']
})
export class SectionContact1DarkComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
