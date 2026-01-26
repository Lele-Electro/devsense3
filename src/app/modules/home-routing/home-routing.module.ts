import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHome1Component } from 'src/app/pages/home/page-home1/page-home1.component';
import { PageHome2Component } from 'src/app/pages/home/page-home2/page-home2.component';

const routes: Routes = [
  { path: '', component: PageHome1Component },
  { path: 'index', component: PageHome1Component },
  { path: 'index2', component: PageHome2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
