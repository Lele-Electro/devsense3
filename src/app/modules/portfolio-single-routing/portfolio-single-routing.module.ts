import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/portfolio/single/page-single-ver-wide/page-single-ver-wide.component').then(m => m.PageSingleVerWideComponent) },
  { path: 'vertical-wide', loadComponent: () => import('src/app/pages/portfolio/single/page-single-ver-wide/page-single-ver-wide.component').then(m => m.PageSingleVerWideComponent) },
  { path: 'vertical-floating', loadComponent: () => import('src/app/pages/portfolio/single/page-single-ver-floating/page-single-ver-floating.component').then(m => m.PageSingleVerFloatingComponent) },
  { path: 'vertical-wide-video', loadComponent: () => import('src/app/pages/portfolio/single/page-single-ver-wide-video/page-single-ver-wide-video.component').then(m => m.PageSingleVerWideVideoComponent) }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioSingleRoutingModule { }
