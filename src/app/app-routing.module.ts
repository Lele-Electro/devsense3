import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './modules/home-routing/home-routing.module';
import { AboutRoutingModule } from './modules/about-routing/about-routing.module';
import { PagesRoutingModule } from './modules/pages-routing/pages-routing.module';
import { ServicesRoutingModule } from './modules/services-routing/services-routing.module';
import { TeamRoutingModule } from './modules/team-routing/team-routing.module';
import { PortfolioGridRoutingModule } from './modules/portfolio-grid-routing/portfolio-grid-routing.module';
import { PortfolioMasonryRoutingModule } from './modules/portfolio-masonry-routing/portfolio-masonry-routing.module';
import { PortfolioCarouselRoutingModule } from './modules/portfolio-carousel-routing/portfolio-carousel-routing.module';
import { PortfolioSingleRoutingModule } from './modules/portfolio-single-routing/portfolio-single-routing.module';
import { BlogRoutingModule } from './modules/blog-routing/blog-routing.module';


const routes: Routes = [
  { path: '', loadChildren: () => HomeRoutingModule },
  { path: 'about', loadChildren: () => AboutRoutingModule },
  { path: 'pages', loadChildren: () => PagesRoutingModule },
  { path: 'services', loadChildren: () => ServicesRoutingModule },
  { path: 'team', loadChildren: () => TeamRoutingModule },
  { path: 'portfolio/grid', loadChildren: () => PortfolioGridRoutingModule },
  { path: 'portfolio/masonry', loadChildren: () => PortfolioMasonryRoutingModule },
  { path: 'portfolio/carousel', loadChildren: () => PortfolioCarouselRoutingModule },
  { path: 'portfolio/single', loadChildren: () => PortfolioSingleRoutingModule },
  { path: 'blog', loadChildren: () => BlogRoutingModule },
  { path: '**', pathMatch: 'full', loadComponent: () => import('./pages/pages/page-error404/page-error404.component').then(m => m.PageError404Component) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
