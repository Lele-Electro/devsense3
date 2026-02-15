import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';










const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid2col/page-grid2col.component').then(m => m.PageGrid2colComponent) },
  { path: '2-columns', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid2col/page-grid2col.component').then(m => m.PageGrid2colComponent) },
  { path: '2-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid2col-nogut/page-grid2col-nogut.component').then(m => m.PageGrid2colNogutComponent) },
  { path: '3-columns', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid3col/page-grid3col.component').then(m => m.PageGrid3colComponent) },
  { path: '3-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid3col-nogut/page-grid3col-nogut.component').then(m => m.PageGrid3colNogutComponent) },
  { path: '4-columns', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid4col/page-grid4col.component').then(m => m.PageGrid4colComponent) },
  { path: '4-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid4col-nogut/page-grid4col-nogut.component').then(m => m.PageGrid4colNogutComponent) },
  { path: '5-columns', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid5col/page-grid5col.component').then(m => m.PageGrid5colComponent) },
  { path: '5-columns-no-gap', loadComponent: () => import('src/app/pages/portfolio/grid/page-grid5col-nogut/page-grid5col-nogut.component').then(m => m.PageGrid5colNogutComponent) },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioGridRoutingModule { }
