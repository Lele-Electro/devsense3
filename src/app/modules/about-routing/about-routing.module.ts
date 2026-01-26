import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAboutCompanyComponent } from 'src/app/pages/about/page-about-company/page-about-company.component';
import { PageAboutMeComponent } from 'src/app/pages/about/page-about-me/page-about-me.component';

const routes: Routes = [
  { path: '', component: PageAboutCompanyComponent },
  { path: 'company', component: PageAboutCompanyComponent },
  { path: 'me', component: PageAboutMeComponent }
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
