import { Component, Input, OnInit } from '@angular/core';
import { SectionBlogTagsComponent } from '../section-blog-tags/section-blog-tags.component';
import { SectionBlogGalleryComponent } from '../section-blog-gallery/section-blog-gallery.component';
import { SectionBlogNewsletterComponent } from '../section-blog-newsletter/section-blog-newsletter.component';
import { SectionBlogCategoriesComponent } from '../section-blog-categories/section-blog-categories.component';
import { SectionBlogSearchComponent } from '../section-blog-search/section-blog-search.component';
import { SectionBlogRecentPostsComponent } from '../section-blog-recent-posts/section-blog-recent-posts.component';

@Component({
    selector: 'app-section-blog-sidebar',
    templateUrl: './section-blog-sidebar.component.html',
    styleUrls: ['./section-blog-sidebar.component.scss'],
    standalone: true,
    imports: [SectionBlogRecentPostsComponent, SectionBlogSearchComponent, SectionBlogCategoriesComponent, SectionBlogNewsletterComponent, SectionBlogGalleryComponent, SectionBlogTagsComponent]
})
export class SectionBlogSidebarComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
