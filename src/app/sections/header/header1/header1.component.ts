import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header1',
    templateUrl: './header1.component.html',
    styleUrls: ['./header1.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class Header1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
