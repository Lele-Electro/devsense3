import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/home/page-home1/page-home1.component').then(m => m.PageHome1Component) },
  { path: 'index', loadComponent: () => import('src/app/pages/home/page-home1/page-home1.component').then(m => m.PageHome1Component) },
  { path: 'index2', loadComponent: () => import('src/app/pages/home/page-home2/page-home2.component').then(m => m.PageHome2Component) }
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
