import { WPPost } from "./wordpress";
import { Signal } from "@angular/core";
export interface WebsiteContent {
    aboutUsOne: Signal<WPPost>;
    aboutUsTwo: Signal<WPPost>;
    servicesOverview: Signal<WPPost>;
    websiteContentExpertise: Signal<websiteContentExpertise>;
    testimonials: Signal<WPPost[]>;
}

export interface PortfolioProjects {
    categories: ProjectCategory[];
    items: PortfolioItem[];
}

export interface ProjectCategory {
    category: string;
    title: string;
    count: string;
}


export interface websiteContentExpertise {
    webApplicationDevelopment: Signal<WPPost>;
    mobileApplicationDevelopment: Signal<WPPost>;
    applicationAndEmailHosting: Signal<WPPost>;
    databaseArchitectureAndManagement: Signal<WPPost>;
}

export interface TestimonialQuote {
    quote: string;
    image: string;
    name: string;
    designation: string;
}

export interface Testimonials {
    title: string;
    quotes: TestimonialQuote[];
}

export interface PortfolioItem {
    category: string;
    image: string;
    title: string;
    subtitle: string;
    image2: string;
    title2: string;
    subtitle2: string;
    author: string;
    thumb: string;
}


