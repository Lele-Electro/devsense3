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


export interface PortfolioProjects2 {
    title: string;
    categories: PortfolioCategory2[];
    projects: PortfolioItem2[];
}

export class PortfolioCategory2 {
    class: string = '';
    title: string = '';
}

export class PortfolioItem2 {
    category: string = '';
    image: string = '';
    title: string = '';
    subtitle: string = '';
    title2: string = '';
    subtitle2: string = '';
    author: string = '';
    thumb: string = '';
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

export interface servicesIntro {
    title: string,
    paragraph: string
}


export interface serviceCard {
    icon: string;
    title: string;
    description: string;
    number?: number;
    image?: string;
    slug?: string;
    detailPostId?: number;
}
export class serviceCardClass {
    icon: string | undefined;
    title: string | undefined;
    description: string | undefined;
    number?: number;
    image?: string;
}

export interface PortfolioCategory {
    class: string;
    title: string;
    count: string;
}

export const DEFAULT_PORTFOLIO_PROJECTS: PortfolioProjects = {
    categories: [
        {
            category: "*",
            title: "All",
            count: "12"
        }, {
            category: "cat-1",
            title: "Artwork",
            count: "3"
        }, {
            category: "cat-2",
            title: "Brandng",
            count: "2"
        }, {
            category: "cat-3",
            title: "Mockup",
            count: "2"
        }, {
            category: "cat-4",
            title: "Motion",
            count: "4"
        }, {
            category: "cat-5",
            title: "Package",
            count: "1"
        }
    ],
    items: [
        {
            category: "cat-1",
            image: "assets/images/projects/portrait/port-1.jpg",
            title: "Photography",
            subtitle: "Graphic Studio",
            image2: "assets/images/projects/portrait/port-1.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-1.jpg"
        }, {
            category: "cat-2",
            image: "assets/images/projects/portrait/port-2.jpg",
            title: "Branding",
            subtitle: "Branding, Print",
            image2: "assets/images/projects/portrait/port-2.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-2.jpg"
        }, {
            category: "cat-3",
            image: "assets/images/projects/portrait/port-3.jpg",
            title: "Ui/Ux & interaction",
            subtitle: "Print, Packaging",
            image2: "assets/images/projects/portrait/port-3.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-3.jpg"
        }, {
            category: "cat-4",
            image: "assets/images/projects/portrait/port-4.jpg",
            title: "Graphic design",
            subtitle: "Advetising",
            image2: "assets/images/projects/portrait/port-4.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-4.jpg"
        }, {
            category: "cat-5",
            image: "assets/images/projects/portrait/port-5.jpg",
            title: "Animation & motion",
            subtitle: "Media Marketing",
            image2: "assets/images/projects/portrait/port-5.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-5.jpg"
        }, {
            category: "cat-4",
            image: "assets/images/projects/portrait/port-6.jpg",
            title: "Development",
            subtitle: "Game Development",
            image2: "assets/images/projects/portrait/port-6.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-6.jpg"
        }, {
            category: "cat-3",
            image: "assets/images/projects/portrait/port-7.jpg",
            title: "Web Design",
            subtitle: "Project Design",
            image2: "assets/images/projects/portrait/port-7.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-7.jpg"
        }, {
            category: "cat-2",
            image: "assets/images/projects/portrait/port-8.jpg",
            title: "Web Design",
            subtitle: "Project Design",
            image2: "assets/images/projects/portrait/port-8.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-8.jpg"
        }, {
            category: "cat-1",
            image: "assets/images/projects/portrait/port-9.jpg",
            title: "Development",
            subtitle: "Game Development",
            image2: "assets/images/projects/portrait/port-9.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-9.jpg"
        }, {
            category: "cat-3",
            image: "assets/images/projects/portrait/port-10.jpg",
            title: "Development",
            subtitle: "Game Development",
            image2: "assets/images/projects/portrait/port-10.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-10.jpg"
        }, {
            category: "cat-2",
            image: "assets/images/projects/portrait/port-11.jpg",
            title: "Development",
            subtitle: "Game Development",
            image2: "assets/images/projects/portrait/port-11.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-11.jpg"
        }, {
            category: "cat-1",
            image: "assets/images/projects/portrait/port-12.jpg",
            title: "Development",
            subtitle: "Game Development",
            image2: "assets/images/projects/portrait/port-12.jpg",
            title2: "Toni Test",
            subtitle2: "Regulatory Compliance System",
            author: "someone",
            thumb: "assets/images/projects/portrait/port-12.jpg"
        }
    ]
};