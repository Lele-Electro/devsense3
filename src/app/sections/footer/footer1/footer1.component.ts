import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer1',
    templateUrl: './footer1.component.html',
    styleUrls: ['./footer1.component.scss'],
    imports: [RouterLink]
})
export class Footer1Component implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
