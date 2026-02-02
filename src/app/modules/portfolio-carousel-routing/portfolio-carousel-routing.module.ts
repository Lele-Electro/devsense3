import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/portfolio/carousel/page-carousel-small/page-carousel-small.component').then(m => m.PageCarouselSmallComponent) },
  { path: 'small', loadComponent: () => import('src/app/pages/portfolio/carousel/page-carousel-small/page-carousel-small.component').then(m => m.PageCarouselSmallComponent) },
  { path: 'large', loadComponent: () => import('src/app/pages/portfolio/carousel/page-carousel-large/page-carousel-large.component').then(m => m.PageCarouselLargeComponent) },
  { path: 'fullwidth', loadComponent: () => import('src/app/pages/portfolio/carousel/page-carousel-fullwidth/page-carousel-fullwidth.component').then(m => m.PageCarouselFullwidthComponent) }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioCarouselRoutingModule { }
