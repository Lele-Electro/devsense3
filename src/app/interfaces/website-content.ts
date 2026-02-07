import { WPPost } from "./wordpress";
export interface WebsiteContent {
    aboutUsOne: WPPost;
    aboutUsTwo: WPPost;
    servicesOverview: WPPost;
    websiteContentExpertise: websiteContentExpertise;
}

export interface websiteContentExpertise {
    webApplicationDevelopment: WPPost;
    mobileApplicationDevelopment: WPPost;
    applicationAndEmailHosting: WPPost;
    databaseArchitectureAndManagement: WPPost;
}
