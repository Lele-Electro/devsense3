import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer1',
    templateUrl: './footer1.component.html',
    styleUrls: ['./footer1.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class Footer1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
