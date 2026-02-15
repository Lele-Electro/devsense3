import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';










const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry2col/page-masonry2col.component').then(m => m.PageMasonry2colComponent) },
  { path: '2-columns', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry2col/page-masonry2col.component').then(m => m.PageMasonry2colComponent) },
  { path: '2-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry2col-nogut/page-masonry2col-nogut.component').then(m => m.PageMasonry2colNogutComponent) },
  { path: '3-columns', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry3col/page-masonry3col.component').then(m => m.PageMasonry3colComponent) },
  { path: '3-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry3col-nogut/page-masonry3col-nogut.component').then(m => m.PageMasonry3colNogutComponent) },
  { path: '4-columns', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry4col/page-masonry4col.component').then(m => m.PageMasonry4colComponent) },
  { path: '4-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry4col-nogut/page-masonry4col-nogut.component').then(m => m.PageMasonry4colNogutComponent) },
  { path: '5-columns', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry5col/page-masonry5col.component').then(m => m.PageMasonry5colComponent) },
  { path: '5-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/masonry/page-masonry5col-nogut/page-masonry5col-nogut.component').then(m => m.PageMasonry5colNogutComponent) }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioMasonryRoutingModule { }
