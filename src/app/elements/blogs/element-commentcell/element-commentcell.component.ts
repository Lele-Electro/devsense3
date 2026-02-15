import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-element-commentcell',
    templateUrl: './element-commentcell.component.html',
    styleUrls: ['./element-commentcell.component.scss'],
    standalone: true
})
export class ElementCommentcellComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
