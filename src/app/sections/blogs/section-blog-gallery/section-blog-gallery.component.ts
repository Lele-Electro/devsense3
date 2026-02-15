import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'app-section-blog-gallery',
    templateUrl: './section-blog-gallery.component.html',
    styleUrls: ['./section-blog-gallery.component.scss'],
    standalone: true
})
export class SectionBlogGalleryComponent implements OnInit {

  readonly data = input<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
