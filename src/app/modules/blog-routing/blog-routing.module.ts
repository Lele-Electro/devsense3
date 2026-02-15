import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';









const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/blog/page-blog-grid/page-blog-grid.component').then(m => m.PageBlogGridComponent) },
  { path: 'grid', loadComponent: () => import('src/app/pages/blog/page-blog-grid/page-blog-grid.component').then(m => m.PageBlogGridComponent) },
  { path: 'classic', loadComponent: () => import('src/app/pages/blog/page-blog-classic/page-blog-classic.component').then(m => m.PageBlogClassicComponent) },
  { path: 'listing', loadComponent: () => import('src/app/pages/blog/page-blog-listing/page-blog-listing.component').then(m => m.PageBlogListingComponent) },
  { path: 'listing2', loadComponent: () => import('src/app/pages/blog/page-blog-listing2/page-blog-listing2.component').then(m => m.PageBlogListing2Component) },
  { path: 'masonry', loadComponent: () => import('src/app/pages/blog/page-blog-masonry/page-blog-masonry.component').then(m => m.PageBlogMasonryComponent) },
  { path: 'single', loadComponent: () => import('src/app/pages/blog/page-blog-single/page-blog-single.component').then(m => m.PageBlogSingleComponent) },
  { path: 'blog-with-sidebar', loadComponent: () => import('src/app/pages/blog/page-blog-with-sidebar/page-blog-with-sidebar.component').then(m => m.PageBlogWithSidebarComponent) }
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
