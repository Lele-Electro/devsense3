import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', loadComponent: () => import('src/app/pages/pages/team/page-team1/page-team1.component').then(m => m.PageTeam1Component) },
  { path: 'team1', loadComponent: () => import('src/app/pages/pages/team/page-team1/page-team1.component').then(m => m.PageTeam1Component) },
  { path: 'team2', loadComponent: () => import('src/app/pages/pages/team/page-team2/page-team2.component').then(m => m.PageTeam2Component) },
  { path: 'detail', loadComponent: () => import('src/app/pages/pages/team/page-team-detail/page-team-detail.component').then(m => m.PageTeamDetailComponent) },
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
