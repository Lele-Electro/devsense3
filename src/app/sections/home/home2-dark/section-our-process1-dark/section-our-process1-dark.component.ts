import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-our-process1-dark',
  templateUrl: './section-our-process1-dark.component.html',
  styleUrls: ['./section-our-process1-dark.component.css']
})
export class SectionOurProcess1DarkComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
