import { Routes } from '@angular/router';

export const routes: Routes = [
  // Home routes
  { path: '', loadComponent: () => import('./pages/home/page-home2/page-home2.component').then(m => m.PageHome2Component), data: { title: 'DevSense - Software Development Agency' } },
  { path: 'home', loadComponent: () => import('./pages/home/page-home2/page-home2.component').then(m => m.PageHome2Component) },
  { path: 'index', loadComponent: () => import('./pages/home/page-home2/page-home2.component').then(m => m.PageHome2Component) },
  { path: 'index2', loadComponent: () => import('./pages/home/page-home2/page-home2.component').then(m => m.PageHome2Component) },
  { path: 'home2', loadComponent: () => import('./pages/home/page-home2/page-home2.component').then(m => m.PageHome2Component) },

  // About routes
  { path: 'about', loadComponent: () => import('./pages/about/page-about-company/page-about-company.component').then(m => m.PageAboutCompanyComponent) },
  { path: 'about/company', loadComponent: () => import('./pages/about/page-about-company/page-about-company.component').then(m => m.PageAboutCompanyComponent) },
  { path: 'about/me', loadComponent: () => import('./pages/about/page-about-me/page-about-me.component').then(m => m.PageAboutMeComponent) },

  // Services routes
  { path: 'services', loadComponent: () => import('./pages/pages/services/page-services1/page-services1.component').then(m => m.PageServices1Component) },
  { path: 'services/services1', loadComponent: () => import('./pages/pages/services/page-services1/page-services1.component').then(m => m.PageServices1Component) },
  { path: 'services/services2', loadComponent: () => import('./pages/pages/services/page-services2/page-services2.component').then(m => m.PageServices2Component) },
  { path: 'services/detail', loadComponent: () => import('./pages/pages/services/page-service-detail/page-service-detail.component').then(m => m.PageServiceDetailComponent) },

  // Team routes
  { path: 'team', loadComponent: () => import('./pages/pages/team/page-team1/page-team1.component').then(m => m.PageTeam1Component) },
  { path: 'team/team1', loadComponent: () => import('./pages/pages/team/page-team1/page-team1.component').then(m => m.PageTeam1Component) },
  { path: 'team/team2', loadComponent: () => import('./pages/pages/team/page-team2/page-team2.component').then(m => m.PageTeam2Component) },
  { path: 'team/detail', loadComponent: () => import('./pages/pages/team/page-team-detail/page-team-detail.component').then(m => m.PageTeamDetailComponent) },

  // Pages routes
  { path: 'pages/our-process', loadComponent: () => import('./pages/pages/page-our-process/page-our-process.component').then(m => m.PageOurProcessComponent) },
  { path: 'pages/fonts-icons', loadComponent: () => import('./pages/pages/page-fonts-icons/page-fonts-icons.component').then(m => m.PageFontsIconsComponent) },
  { path: 'pages/error404', loadComponent: () => import('./pages/pages/page-error404/page-error404.component').then(m => m.PageError404Component) },
  { path: 'pages/faq', loadComponent: () => import('./pages/pages/page-faq/page-faq.component').then(m => m.PageFaqComponent) },
  { path: 'pages/contact-us', loadComponent: () => import('./pages/pages/page-contact-us/page-contact-us.component').then(m => m.PageContactUsComponent) },

  // Portfolio Grid routes
  { path: 'portfolio/grid', loadComponent: () => import('./pages/portfolio/grid/page-grid2col/page-grid2col.component').then(m => m.PageGrid2colComponent) },
  { path: 'portfolio/grid/2-columns', loadComponent: () => import('./pages/portfolio/grid/page-grid2col/page-grid2col.component').then(m => m.PageGrid2colComponent) },
  { path: 'portfolio/grid/2-columns-no-gap', loadComponent: () => import('./pages/portfolio/grid/page-grid2col-nogut/page-grid2col-nogut.component').then(m => m.PageGrid2colNogutComponent) },
  { path: 'portfolio/grid/3-columns', loadComponent: () => import('./pages/portfolio/grid/page-grid3col/page-grid3col.component').then(m => m.PageGrid3colComponent) },
  { path: 'portfolio/grid/3-columns-no-gap', loadComponent: () => import('./pages/portfolio/grid/page-grid3col-nogut/page-grid3col-nogut.component').then(m => m.PageGrid3colNogutComponent) },
  { path: 'portfolio/grid/4-columns', loadComponent: () => import('./pages/portfolio/grid/page-grid4col/page-grid4col.component').then(m => m.PageGrid4colComponent) },
  { path: 'portfolio/grid/4-columns-no-gap', loadComponent: () => import('./pages/portfolio/grid/page-grid4col-nogut/page-grid4col-nogut.component').then(m => m.PageGrid4colNogutComponent) },
  { path: 'portfolio/grid/5-columns', loadComponent: () => import('./pages/portfolio/grid/page-grid5col/page-grid5col.component').then(m => m.PageGrid5colComponent) },
  { path: 'portfolio/grid/5-columns-no-gap', loadComponent: () => import('./pages/portfolio/grid/page-grid5col-nogut/page-grid5col-nogut.component').then(m => m.PageGrid5colNogutComponent) },

  // Portfolio Masonry routes
  { path: 'portfolio/masonry', loadComponent: () => import('./pages/portfolio/masonry/page-masonry2col/page-masonry2col.component').then(m => m.PageMasonry2colComponent) },
  { path: 'portfolio/masonry/2-columns', loadComponent: () => import('./pages/portfolio/masonry/page-masonry2col/page-masonry2col.component').then(m => m.PageMasonry2colComponent) },
  { path: 'portfolio/masonry/2-columns-no-gap', loadComponent: () => import('./pages/portfolio/masonry/page-masonry2col-nogut/page-masonry2col-nogut.component').then(m => m.PageMasonry2colNogutComponent) },
  { path: 'portfolio/masonry/3-columns', loadComponent: () => import('./pages/portfolio/masonry/page-masonry3col/page-masonry3col.component').then(m => m.PageMasonry3colComponent) },
  { path: 'portfolio/masonry/3-columns-no-gap', loadComponent: () => import('./pages/portfolio/masonry/page-masonry3col-nogut/page-masonry3col-nogut.component').then(m => m.PageMasonry3colNogutComponent) },
  { path: 'portfolio/masonry/4-columns', loadComponent: () => import('./pages/portfolio/masonry/page-masonry4col/page-masonry4col.component').then(m => m.PageMasonry4colComponent) },
  { path: 'portfolio/masonry/4-columns-no-gap', loadComponent: () => import('./pages/portfolio/masonry/page-masonry4col-nogut/page-masonry4col-nogut.component').then(m => m.PageMasonry4colNogutComponent) },
  { path: 'portfolio/masonry/5-columns', loadComponent: () => import('./pages/portfolio/masonry/page-masonry5col/page-masonry5col.component').then(m => m.PageMasonry5colComponent) },
  { path: 'portfolio/masonry/5-columns-no-gap', loadComponent: () => import('./pages/portfolio/masonry/page-masonry5col-nogut/page-masonry5col-nogut.component').then(m => m.PageMasonry5colNogutComponent) },

  // Portfolio Carousel routes
  { path: 'portfolio/carousel', loadComponent: () => import('./pages/portfolio/carousel/page-carousel-small/page-carousel-small.component').then(m => m.PageCarouselSmallComponent) },
  { path: 'portfolio/carousel/small', loadComponent: () => import('./pages/portfolio/carousel/page-carousel-small/page-carousel-small.component').then(m => m.PageCarouselSmallComponent) },
  { path: 'portfolio/carousel/large', loadComponent: () => import('./pages/portfolio/carousel/page-carousel-large/page-carousel-large.component').then(m => m.PageCarouselLargeComponent) },
  { path: 'portfolio/carousel/fullwidth', loadComponent: () => import('./pages/portfolio/carousel/page-carousel-fullwidth/page-carousel-fullwidth.component').then(m => m.PageCarouselFullwidthComponent) },

  // Portfolio Single routes
  { path: 'portfolio/single', loadComponent: () => import('./pages/portfolio/single/page-single-ver-wide/page-single-ver-wide.component').then(m => m.PageSingleVerWideComponent) },
  { path: 'portfolio/single/vertical-wide', loadComponent: () => import('./pages/portfolio/single/page-single-ver-wide/page-single-ver-wide.component').then(m => m.PageSingleVerWideComponent) },
  { path: 'portfolio/single/vertical-floating', loadComponent: () => import('./pages/portfolio/single/page-single-ver-floating/page-single-ver-floating.component').then(m => m.PageSingleVerFloatingComponent) },
  { path: 'portfolio/single/vertical-wide-video', loadComponent: () => import('./pages/portfolio/single/page-single-ver-wide-video/page-single-ver-wide-video.component').then(m => m.PageSingleVerWideVideoComponent) },

  // Blog routes
  { path: 'blog', loadComponent: () => import('./pages/blog/page-blog-grid/page-blog-grid.component').then(m => m.PageBlogGridComponent) },
  { path: 'blog/grid', loadComponent: () => import('./pages/blog/page-blog-grid/page-blog-grid.component').then(m => m.PageBlogGridComponent) },
  { path: 'blog/classic', loadComponent: () => import('./pages/blog/page-blog-classic/page-blog-classic.component').then(m => m.PageBlogClassicComponent) },
  { path: 'blog/listing', loadComponent: () => import('./pages/blog/page-blog-listing/page-blog-listing.component').then(m => m.PageBlogListingComponent) },
  { path: 'blog/listing2', loadComponent: () => import('./pages/blog/page-blog-listing2/page-blog-listing2.component').then(m => m.PageBlogListing2Component) },
  { path: 'blog/masonry', loadComponent: () => import('./pages/blog/page-blog-masonry/page-blog-masonry.component').then(m => m.PageBlogMasonryComponent) },
  { path: 'blog/single', loadComponent: () => import('./pages/blog/page-blog-single/page-blog-single.component').then(m => m.PageBlogSingleComponent) },
  { path: 'blog/blog-with-sidebar', loadComponent: () => import('./pages/blog/page-blog-with-sidebar/page-blog-with-sidebar.component').then(m => m.PageBlogWithSidebarComponent) },

  // Error/404 routes
  { path: '404', loadComponent: () => import('./pages/pages/page-error404/page-error404.component').then(m => m.PageError404Component) },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
];
