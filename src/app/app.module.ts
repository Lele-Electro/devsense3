import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { PageAboutMeComponent } from './pages/about/page-about-me/page-about-me.component';
import { PageAboutCompanyComponent } from './pages/about/page-about-company/page-about-company.component';
import { PageHome2Component } from './pages/home/page-home2/page-home2.component';
import { PageHome1Component } from './pages/home/page-home1/page-home1.component';
import { PageOurProcessComponent } from './pages/pages/page-our-process/page-our-process.component';
import { PageFontsIconsComponent } from './pages/pages/page-fonts-icons/page-fonts-icons.component';
import { PageError404Component } from './pages/pages/page-error404/page-error404.component';
import { PageFaqComponent } from './pages/pages/page-faq/page-faq.component';
import { PageContactUsComponent } from './pages/pages/page-contact-us/page-contact-us.component';
import { PageServices1Component } from './pages/pages/services/page-services1/page-services1.component';
import { PageServices2Component } from './pages/pages/services/page-services2/page-services2.component';
import { PageServiceDetailComponent } from './pages/pages/services/page-service-detail/page-service-detail.component';
import { PageTeam1Component } from './pages/pages/team/page-team1/page-team1.component';
import { PageTeam2Component } from './pages/pages/team/page-team2/page-team2.component';
import { PageTeamDetailComponent } from './pages/pages/team/page-team-detail/page-team-detail.component';
import { PageGrid2colComponent } from './pages/portfolio/grid/page-grid2col/page-grid2col.component';
import { PageGrid2colNogutComponent } from './pages/portfolio/grid/page-grid2col-nogut/page-grid2col-nogut.component';
import { PageGrid3colNogutComponent } from './pages/portfolio/grid/page-grid3col-nogut/page-grid3col-nogut.component';
import { PageGrid4colNogutComponent } from './pages/portfolio/grid/page-grid4col-nogut/page-grid4col-nogut.component';
import { PageGrid5colNogutComponent } from './pages/portfolio/grid/page-grid5col-nogut/page-grid5col-nogut.component';
import { PageGrid3colComponent } from './pages/portfolio/grid/page-grid3col/page-grid3col.component';
import { PageGrid4colComponent } from './pages/portfolio/grid/page-grid4col/page-grid4col.component';
import { PageGrid5colComponent } from './pages/portfolio/grid/page-grid5col/page-grid5col.component';
import { PageMasonry2colComponent } from './pages/portfolio/masonry/page-masonry2col/page-masonry2col.component';
import { PageMasonry3colComponent } from './pages/portfolio/masonry/page-masonry3col/page-masonry3col.component';
import { PageMasonry4colComponent } from './pages/portfolio/masonry/page-masonry4col/page-masonry4col.component';
import { PageMasonry5colComponent } from './pages/portfolio/masonry/page-masonry5col/page-masonry5col.component';
import { PageMasonry2colNogutComponent } from './pages/portfolio/masonry/page-masonry2col-nogut/page-masonry2col-nogut.component';
import { PageMasonry3colNogutComponent } from './pages/portfolio/masonry/page-masonry3col-nogut/page-masonry3col-nogut.component';
import { PageMasonry4colNogutComponent } from './pages/portfolio/masonry/page-masonry4col-nogut/page-masonry4col-nogut.component';
import { PageMasonry5colNogutComponent } from './pages/portfolio/masonry/page-masonry5col-nogut/page-masonry5col-nogut.component';
import { PageCarouselSmallComponent } from './pages/portfolio/carousel/page-carousel-small/page-carousel-small.component';
import { PageCarouselLargeComponent } from './pages/portfolio/carousel/page-carousel-large/page-carousel-large.component';
import { PageCarouselFullwidthComponent } from './pages/portfolio/carousel/page-carousel-fullwidth/page-carousel-fullwidth.component';
import { PageSingleVerWideComponent } from './pages/portfolio/single/page-single-ver-wide/page-single-ver-wide.component';
import { PageSingleVerFloatingComponent } from './pages/portfolio/single/page-single-ver-floating/page-single-ver-floating.component';
import { PageSingleVerWideVideoComponent } from './pages/portfolio/single/page-single-ver-wide-video/page-single-ver-wide-video.component';
import { PageBlogGridComponent } from './pages/blog/page-blog-grid/page-blog-grid.component';
import { PageBlogClassicComponent } from './pages/blog/page-blog-classic/page-blog-classic.component';
import { PageBlogListingComponent } from './pages/blog/page-blog-listing/page-blog-listing.component';
import { PageBlogListing2Component } from './pages/blog/page-blog-listing2/page-blog-listing2.component';
import { PageBlogMasonryComponent } from './pages/blog/page-blog-masonry/page-blog-masonry.component';
import { PageBlogSingleComponent } from './pages/blog/page-blog-single/page-blog-single.component';
import { PageBlogWithSidebarComponent } from './pages/blog/page-blog-with-sidebar/page-blog-with-sidebar.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { Header1Component } from './sections/header/header1/header1.component';
import { Header2Component } from './sections/header/header2/header2.component';
import { Footer1Component } from './sections/footer/footer1/footer1.component';
import { SectionSlider1Component } from './sections/home/home1/section-slider1/section-slider1.component';
import { SectionProjects1Component } from './sections/home/home1/section-projects1/section-projects1.component';
import { SectionOurClients1Component } from './sections/home/home1/section-our-clients1/section-our-clients1.component';
import { SectionBlogs1Component } from './sections/home/home1/section-blogs1/section-blogs1.component';
import { SectionTestimonials1Component } from './sections/home/home1/section-testimonials1/section-testimonials1.component';
import { SectionContact1Component } from './sections/home/home1/section-contact1/section-contact1.component';
import { SectionAboutCompany1Component } from './sections/home/home1/section-about-company1/section-about-company1.component';
import { SectionSkills1Component } from './sections/home/home1/section-skills1/section-skills1.component';
import { SectionSlider2Component } from './sections/home/home2/section-slider2/section-slider2.component';
import { SectionAboutCompany2Component } from './sections/home/home2/section-about-company2/section-about-company2.component';
import { SectionWhatWeDo1Component } from './sections/home/home2/section-what-we-do1/section-what-we-do1.component';
import { SectionOurServices1Component } from './sections/home/home2/section-our-services1/section-our-services1.component';
import { SectionOurClients2Component } from './sections/home/home2/section-our-clients2/section-our-clients2.component';
import { SectionOurProcess1Component } from './sections/home/home2/section-our-process1/section-our-process1.component';
import { SectionAwards1Component } from './sections/home/home2/section-awards1/section-awards1.component';
import { SectionOurTeam1Component } from './sections/home/home2/section-our-team1/section-our-team1.component';
import { SectionPricing1Component } from './sections/home/home2/section-pricing1/section-pricing1.component';
import { SectionBlogs2Component } from './sections/home/home2/section-blogs2/section-blogs2.component';
import { SectionCounter1Component } from './sections/home/home2/section-counter1/section-counter1.component';
import { SectionTestimonials2Component } from './sections/home/home2/section-testimonials2/section-testimonials2.component';
import { BannerComponent } from './sections/banner/banner.component';
import { SectionAboutUsComponent } from './sections/about/company/section-about-us/section-about-us.component';
import { SectionDesignComponent } from './sections/about/company/section-design/section-design.component';
import { SectionAwardsComponent } from './sections/about/company/section-awards/section-awards.component';
import { SectionExperienceComponent } from './sections/about/company/section-experience/section-experience.component';
import { SectionProjects2Component } from './sections/about/me/section-projects2/section-projects2.component';
import { SectionPortfolioProductDetailsShareComponent } from './sections/portfolio/section-portfolio-product-details-share/section-portfolio-product-details-share.component';
import { SectionBlogSidebarComponent } from './sections/blogs/section-blog-sidebar/section-blog-sidebar.component';
import { SectionBlogRecentPostsComponent } from './sections/blogs/section-blog-recent-posts/section-blog-recent-posts.component';
import { SectionBlogSearchComponent } from './sections/blogs/section-blog-search/section-blog-search.component';
import { SectionBlogCategoriesComponent } from './sections/blogs/section-blog-categories/section-blog-categories.component';
import { SectionBlogGalleryComponent } from './sections/blogs/section-blog-gallery/section-blog-gallery.component';
import { SectionBlogTagsComponent } from './sections/blogs/section-blog-tags/section-blog-tags.component';
import { SectionBlogNewsletterComponent } from './sections/blogs/section-blog-newsletter/section-blog-newsletter.component';
import { SafePipe } from './pipes/safe.pipe';
import { ElementCommentcellComponent } from './elements/blogs/element-commentcell/element-commentcell.component';
import { SectionBlogCommentsComponent } from './sections/blogs/section-blog-comments/section-blog-comments.component';
import { SectionBlogAreaComponent } from './sections/blogs/section-blog-area/section-blog-area.component';
import { SectionBrandingComponent } from './sections/services/section-branding/section-branding.component';
import { SectionOurClients3Component } from './sections/services/section-our-clients3/section-our-clients3.component';
import { SectionOurServices2Component } from './sections/services/section-our-services2/section-our-services2.component';
import { SectionCounter2Component } from './sections/services/section-counter2/section-counter2.component';
import { SectionServicesSidebarComponent } from './sections/services/section-services-sidebar/section-services-sidebar.component';
import { SectionServiceDetailAreaComponent } from './sections/services/section-service-detail-area/section-service-detail-area.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeRoutingModule,
        AboutRoutingModule,
        PagesRoutingModule,
        ServicesRoutingModule,
        TeamRoutingModule,
        PortfolioGridRoutingModule,
        PortfolioMasonryRoutingModule,
        PortfolioCarouselRoutingModule,
        PortfolioSingleRoutingModule,
        BlogRoutingModule,
        HttpClientModule,
        PageAboutMeComponent,
        PageAboutCompanyComponent,
        PageHome2Component,
        PageHome1Component,
        PageOurProcessComponent,
        PageFontsIconsComponent,
        PageError404Component,
        PageFaqComponent,
        PageContactUsComponent,
        PageServices1Component,
        PageServices2Component,
        PageServiceDetailComponent,
        PageTeam1Component,
        PageTeam2Component,
        PageTeamDetailComponent,
        PageGrid2colComponent,
        PageGrid2colNogutComponent,
        PageGrid3colNogutComponent,
        PageGrid4colNogutComponent,
        PageGrid5colNogutComponent,
        PageGrid3colComponent,
        PageGrid4colComponent,
        PageGrid5colComponent,
        PageMasonry2colComponent,
        PageMasonry3colComponent,
        PageMasonry4colComponent,
        PageMasonry5colComponent,
        PageMasonry2colNogutComponent,
        PageMasonry3colNogutComponent,
        PageMasonry4colNogutComponent,
        PageMasonry5colNogutComponent,
        PageCarouselSmallComponent,
        PageCarouselLargeComponent,
        PageCarouselFullwidthComponent,
        PageSingleVerWideComponent,
        PageSingleVerFloatingComponent,
        PageSingleVerWideVideoComponent,
        PageBlogGridComponent,
        PageBlogClassicComponent,
        PageBlogListingComponent,
        PageBlogListing2Component,
        PageBlogMasonryComponent,
        PageBlogSingleComponent,
        PageBlogWithSidebarComponent,
        LoaderComponent,
        Header1Component,
        Header2Component,
        Footer1Component,
        SectionSlider1Component,
        SectionProjects1Component,
        SectionOurClients1Component,
        SectionBlogs1Component,
        SectionTestimonials1Component,
        SectionContact1Component,
        SectionAboutCompany1Component,
        SectionSkills1Component,
        SectionSlider2Component,
        SectionAboutCompany2Component,
        SectionWhatWeDo1Component,
        SectionOurServices1Component,
        SectionOurClients2Component,
        SectionOurProcess1Component,
        SectionAwards1Component,
        SectionOurTeam1Component,
        SectionPricing1Component,
        SectionBlogs2Component,
        SectionCounter1Component,
        SectionTestimonials2Component,
        BannerComponent,
        SectionAboutUsComponent,
        SectionDesignComponent,
        SectionAwardsComponent,
        SectionExperienceComponent,
        SectionProjects2Component,
        SectionPortfolioProductDetailsShareComponent,
        SectionBlogSidebarComponent,
        SectionBlogRecentPostsComponent,
        SectionBlogSearchComponent,
        SectionBlogCategoriesComponent,
        SectionBlogGalleryComponent,
        SectionBlogTagsComponent,
        SectionBlogNewsletterComponent,
        SafePipe,
        ElementCommentcellComponent,
        SectionBlogCommentsComponent,
        SectionBlogAreaComponent,
        SectionBrandingComponent,
        SectionOurClients3Component,
        SectionOurServices2Component,
        SectionCounter2Component,
        SectionServicesSidebarComponent,
        SectionServiceDetailAreaComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
