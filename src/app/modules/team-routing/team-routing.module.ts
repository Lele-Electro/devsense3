import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageTeam1Component } from 'src/app/pages/pages/team/page-team1/page-team1.component';
import { PageTeam2Component } from 'src/app/pages/pages/team/page-team2/page-team2.component';
import { PageTeamDetailComponent } from 'src/app/pages/pages/team/page-team-detail/page-team-detail.component';

const routes: Routes = [
  { path: '', component: PageTeam1Component },
  { path: 'team1', component: PageTeam1Component },
  { path: 'team2', component: PageTeam2Component },
  { path: 'detail', component: PageTeamDetailComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeamRoutingModule { }
