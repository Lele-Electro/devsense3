import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageGrid2colComponent } from 'src/app/pages/portfolio/grid/page-grid2col/page-grid2col.component';
import { PageGrid2colNogutComponent } from 'src/app/pages/portfolio/grid/page-grid2col-nogut/page-grid2col-nogut.component';
import { PageGrid3colComponent } from 'src/app/pages/portfolio/grid/page-grid3col/page-grid3col.component';
import { PageGrid3colNogutComponent } from 'src/app/pages/portfolio/grid/page-grid3col-nogut/page-grid3col-nogut.component';
import { PageGrid4colComponent } from 'src/app/pages/portfolio/grid/page-grid4col/page-grid4col.component';
import { PageGrid4colNogutComponent } from 'src/app/pages/portfolio/grid/page-grid4col-nogut/page-grid4col-nogut.component';
import { PageGrid5colComponent } from 'src/app/pages/portfolio/grid/page-grid5col/page-grid5col.component';
import { PageGrid5colNogutComponent } from 'src/app/pages/portfolio/grid/page-grid5col-nogut/page-grid5col-nogut.component';

const routes: Routes = [
  { path: '', component: PageGrid2colComponent },
  { path: '2-columns', component: PageGrid2colComponent },
  { path: '2-columns-no-gap', component: PageGrid2colNogutComponent },
  { path: '3-columns', component: PageGrid3colComponent },
  { path: '3-columns-no-gap', component: PageGrid3colNogutComponent },
  { path: '4-columns', component: PageGrid4colComponent },
  { path: '4-columns-no-gap', component: PageGrid4colNogutComponent },
  { path: '5-columns', component: PageGrid5colComponent },
  { path: '5-columns-no-gap', component: PageGrid5colNogutComponent },
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
