import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-commentcell',
  templateUrl: './element-commentcell.component.html',
  styleUrls: ['./element-commentcell.component.css']
})
export class ElementCommentcellComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
