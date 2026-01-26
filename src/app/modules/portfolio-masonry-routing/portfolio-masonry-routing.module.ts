import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageMasonry2colComponent } from 'src/app/pages/portfolio/masonry/page-masonry2col/page-masonry2col.component';
import { PageMasonry2colNogutComponent } from 'src/app/pages/portfolio/masonry/page-masonry2col-nogut/page-masonry2col-nogut.component';
import { PageMasonry3colComponent } from 'src/app/pages/portfolio/masonry/page-masonry3col/page-masonry3col.component';
import { PageMasonry3colNogutComponent } from 'src/app/pages/portfolio/masonry/page-masonry3col-nogut/page-masonry3col-nogut.component';
import { PageMasonry4colComponent } from 'src/app/pages/portfolio/masonry/page-masonry4col/page-masonry4col.component';
import { PageMasonry4colNogutComponent } from 'src/app/pages/portfolio/masonry/page-masonry4col-nogut/page-masonry4col-nogut.component';
import { PageMasonry5colComponent } from 'src/app/pages/portfolio/masonry/page-masonry5col/page-masonry5col.component';
import { PageMasonry5colNogutComponent } from 'src/app/pages/portfolio/masonry/page-masonry5col-nogut/page-masonry5col-nogut.component';

const routes: Routes = [
  { path: '', component: PageMasonry2colComponent },
  { path: '2-columns', component: PageMasonry2colComponent },
  { path: '2-columns-no-gap', component: PageMasonry2colNogutComponent },
  { path: '3-columns', component: PageMasonry3colComponent },
  { path: '3-columns-no-gap', component: PageMasonry3colNogutComponent },
  { path: '4-columns', component: PageMasonry4colComponent },
  { path: '4-columns-no-gap', component: PageMasonry4colNogutComponent },
  { path: '5-columns', component: PageMasonry5colComponent },
  { path: '5-columns-no-gap', component: PageMasonry5colNogutComponent }
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
