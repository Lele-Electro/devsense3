import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageOurProcessComponent } from 'src/app/pages/pages/page-our-process/page-our-process.component';
import { PageFontsIconsComponent } from 'src/app/pages/pages/page-fonts-icons/page-fonts-icons.component';
import { PageError404Component } from 'src/app/pages/pages/page-error404/page-error404.component';
import { PageFaqComponent } from 'src/app/pages/pages/page-faq/page-faq.component';
import { PageContactUsComponent } from 'src/app/pages/pages/page-contact-us/page-contact-us.component';

const routes: Routes = [
  { path: 'our-process', component: PageOurProcessComponent },
  { path: 'fonts-icons', component: PageFontsIconsComponent },
  { path: 'error404', component: PageError404Component },
  { path: 'faq', component: PageFaqComponent },
  { path: 'contact-us', component: PageContactUsComponent }
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
