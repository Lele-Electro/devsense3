import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageServices1Component } from 'src/app/pages/pages/services/page-services1/page-services1.component';
import { PageServices2Component } from 'src/app/pages/pages/services/page-services2/page-services2.component';
import { PageServiceDetailComponent } from 'src/app/pages/pages/services/page-service-detail/page-service-detail.component';

const routes: Routes = [
  { path: '', component: PageServices1Component },
  { path: 'services1', component: PageServices1Component },
  { path: 'services2', component: PageServices2Component },
  { path: 'detail', component: PageServiceDetailComponent },
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
