import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageSingleVerWideComponent } from 'src/app/pages/portfolio/single/page-single-ver-wide/page-single-ver-wide.component';
import { PageSingleVerFloatingComponent } from 'src/app/pages/portfolio/single/page-single-ver-floating/page-single-ver-floating.component';
import { PageSingleVerWideVideoComponent } from 'src/app/pages/portfolio/single/page-single-ver-wide-video/page-single-ver-wide-video.component';

const routes: Routes = [
  { path: '', component: PageSingleVerWideComponent },
  { path: 'vertical-wide', component: PageSingleVerWideComponent },
  { path: 'vertical-floating', component: PageSingleVerFloatingComponent },
  { path: 'vertical-wide-video', component: PageSingleVerWideVideoComponent }
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
