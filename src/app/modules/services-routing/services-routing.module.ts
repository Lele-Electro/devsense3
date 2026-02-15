import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/pages/services/page-services1/page-services1.component').then(m => m.PageServices1Component) },
  { path: 'services1', loadComponent: () => import('src/app/pages/pages/services/page-services1/page-services1.component').then(m => m.PageServices1Component) },
  { path: 'services2', loadComponent: () => import('src/app/pages/pages/services/page-services2/page-services2.component').then(m => m.PageServices2Component) },
  { path: 'detail', loadComponent: () => import('src/app/pages/pages/services/page-service-detail/page-service-detail.component').then(m => m.PageServiceDetailComponent) },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesRoutingModule { }
