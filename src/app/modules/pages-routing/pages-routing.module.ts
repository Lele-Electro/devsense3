import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';







const routes: Routes = [
  { path: 'our-process', loadComponent: () => import('src/app/pages/pages/page-our-process/page-our-process.component').then(m => m.PageOurProcessComponent) },
  { path: 'fonts-icons', loadComponent: () => import('src/app/pages/pages/page-fonts-icons/page-fonts-icons.component').then(m => m.PageFontsIconsComponent) },
  { path: 'error404', loadComponent: () => import('src/app/pages/pages/page-error404/page-error404.component').then(m => m.PageError404Component) },
  { path: 'faq', loadComponent: () => import('src/app/pages/pages/page-faq/page-faq.component').then(m => m.PageFaqComponent) },
  { path: 'contact-us', loadComponent: () => import('src/app/pages/pages/page-contact-us/page-contact-us.component').then(m => m.PageContactUsComponent) }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
