import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-gallery',
  templateUrl: './section-blog-gallery.component.html',
  styleUrls: ['./section-blog-gallery.component.scss']
})
export class SectionBlogGalleryComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
