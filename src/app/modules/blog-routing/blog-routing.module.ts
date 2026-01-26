import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageBlogGridComponent } from 'src/app/pages/blog/page-blog-grid/page-blog-grid.component';
import { PageBlogClassicComponent } from 'src/app/pages/blog/page-blog-classic/page-blog-classic.component';
import { PageBlogListingComponent } from 'src/app/pages/blog/page-blog-listing/page-blog-listing.component';
import { PageBlogListing2Component } from 'src/app/pages/blog/page-blog-listing2/page-blog-listing2.component';
import { PageBlogMasonryComponent } from 'src/app/pages/blog/page-blog-masonry/page-blog-masonry.component';
import { PageBlogSingleComponent } from 'src/app/pages/blog/page-blog-single/page-blog-single.component';
import { PageBlogWithSidebarComponent } from 'src/app/pages/blog/page-blog-with-sidebar/page-blog-with-sidebar.component';

const routes: Routes = [
  { path: '', component: PageBlogGridComponent },
  { path: 'grid', component: PageBlogGridComponent },
  { path: 'classic', component: PageBlogClassicComponent },
  { path: 'listing', component: PageBlogListingComponent },
  { path: 'listing2', component: PageBlogListing2Component },
  { path: 'masonry', component: PageBlogMasonryComponent },
  { path: 'single', component: PageBlogSingleComponent },
  { path: 'blog-with-sidebar', component: PageBlogWithSidebarComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
