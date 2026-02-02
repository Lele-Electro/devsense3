import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/about/page-about-company/page-about-company.component').then(m => m.PageAboutCompanyComponent) },
  { path: 'company', loadComponent: () => import('src/app/pages/about/page-about-company/page-about-company.component').then(m => m.PageAboutCompanyComponent) },
  { path: 'me', loadComponent: () => import('src/app/pages/about/page-about-me/page-about-me.component').then(m => m.PageAboutMeComponent) }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
