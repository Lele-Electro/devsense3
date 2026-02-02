import { Component, Input, OnInit } from '@angular/core';
import { ElementCommentcellComponent } from '../../../elements/blogs/element-commentcell/element-commentcell.component';

@Component({
    selector: 'app-section-blog-comments',
    templateUrl: './section-blog-comments.component.html',
    styleUrls: ['./section-blog-comments.component.scss'],
    imports: [ElementCommentcellComponent]
})
export class SectionBlogCommentsComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
