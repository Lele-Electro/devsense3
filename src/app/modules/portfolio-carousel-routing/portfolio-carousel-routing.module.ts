import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageCarouselSmallComponent } from 'src/app/pages/portfolio/carousel/page-carousel-small/page-carousel-small.component';
import { PageCarouselLargeComponent } from 'src/app/pages/portfolio/carousel/page-carousel-large/page-carousel-large.component';
import { PageCarouselFullwidthComponent } from 'src/app/pages/portfolio/carousel/page-carousel-fullwidth/page-carousel-fullwidth.component';

const routes: Routes = [
  { path: '', component: PageCarouselSmallComponent },
  { path: 'small', component: PageCarouselSmallComponent },
  { path: 'large', component: PageCarouselLargeComponent },
  { path: 'fullwidth', component: PageCarouselFullwidthComponent }
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
