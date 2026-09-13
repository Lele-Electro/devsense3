import { Component, inject } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionTestimonials2Component } from '../../../sections/home/home2/section-testimonials2/section-testimonials2.component';
import { SectionExperienceComponent } from '../../../sections/about/company/section-experience/section-experience.component';
import { SectionAwardsComponent } from '../../../sections/about/company/section-awards/section-awards.component';
import { SectionDesignComponent } from '../../../sections/about/company/section-design/section-design.component';
import { SectionAboutUsComponent } from '../../../sections/about/company/section-about-us/section-about-us.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';
import { WordpressService } from '../../../services/wordpress.service';

@Component({
  selector: 'app-page-about-company',
  templateUrl: './page-about-company.component.html',
  styleUrls: ['./page-about-company.component.scss'],
  imports: [Header2Component, BannerComponent, SectionAboutUsComponent, SectionDesignComponent, SectionAwardsComponent, SectionExperienceComponent, SectionTestimonials2Component, Footer1Component]
})
export class PageAboutCompanyComponent {
  protected readonly wpService = inject(WordpressService);

  banner = {
    background: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/devsense-team-office-768x576.png",
    title: "About Company",
    currentPage: "About Company",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  about = {
    title: "About Us",
    description1: "We Cover a large range of creative digital projects, platforms and campaigns to create experiences",
    description2: "Design pages easily with the Visual Composer drag-and-drop page builder. Highlight interesting facts about you or your business. Accompany this with a selection of icons from five amazing icon packs and style them to fit your site design. Choose from a collection of Pie Charts, Line Graphs and Progress Bars. Style each element and make it your own.",
    projects: [
      [
        {
          title: "Art direction",
          image: "assets/images/services/service-2/port-1.jpg"
        },
        {
          title: "Illustration",
          image: "assets/images/services/service-2/port-2.jpg"
        },
        {
          title: "2D & 3D animation",
          image: "assets/images/services/service-2/port-3.jpg"
        },
        {
          title: "Sound design",
          image: "assets/images/services/service-2/port-4.jpg"
        },
        {
          title: "Motion design",
          image: "assets/images/services/service-2/port-5.jpg"
        },
        {
          title: "Creative development",
          image: "assets/images/services/service-2/port-6.jpg"
        }
      ],
      [
        {
          title: "VR & AR development",
          image: "assets/images/services/service-2/port-7.jpg"
        },
        {
          title: "App development",
          image: "assets/images/services/service-2/port-8.jpg"
        },
        {
          title: "Front-end development",
          image: "assets/images/services/service-2/port-9.jpg"
        },
        {
          title: "Ui/Ux Design",
          image: "assets/images/services/service-2/port-10.jpg"
        },
        {
          title: "Back-end development",
          image: "assets/images/services/service-2/port-11.jpg"
        }
      ]
    ]
  }

  design = {
    image: "https://devsense.co.za/wp3/wp-content/uploads/2026/09/our-process-office-team.png",
    title: "Design the Details.",
    description: "Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating."
  }

  awards = {
    title: "Industry Awards and Recognitions",
    awards: [
      [
        {
          year: "2013",
          title: "Agency of the Year",
          description: "Display your qualities and highlight your productivity."
        },
        {
          year: "2014",
          title: "Site of the Day",
          description: "Which creates any land in beautiful creation "
        },
        {
          year: "2015",
          title: "National Portrait Gallery",
          description: "Which can perform their task with all the best standards."
        }
      ],
      [
        {
          year: "2016",
          title: "Ui Design Awards – Innovation",
          description: "Interior design, a fine line with more shine a design"
        },
        {
          year: "2017",
          title: "Creative Backend Coder",
          description: "Perfect bend choose the style, we complete with our file"
        },
        {
          year: "2018",
          title: "Ui Ux Best Idea",
          description: "To make a type specimen book. remaining essentially."
        }
      ]
    ]
  }

  experience = {
    title: "Experience on the DevSense Team",
    projects: [
      {
        teamMember: "Antonio Ribeiro",
        title: "Digital Sales Platform (Testdrive) - BMW Group",
        description: "Connecting premium automotive retail with intuitive digital experiences. Antonio helped deliver BMW's Rockar 2.0 Digital Sales Platform and co-built its Test-Drive booking application, bringing our company experience creating polished sales and booking journeys backed by reusable components and comprehensive testing.",
        dateRange: "July 2024 – April 2026",
        imageUrl: "https://devsense.co.za/wp3/wp-content/uploads/2026/09/experience-bmw.webp",
        imageAlt: "BMW Group South Africa headquarters in Menlyn",
        developerImageUrl: "",
        developerImageAlt: "Antonio Ribeiro"
      },
      {
        teamMember: "Antonio Ribeiro",
        title: "Enterprise Application Development - LabourNet",
        description: "Making complex enterprise applications clearer, more consistent and easier to use. Antonio delivered Angular features, refined user interfaces and strengthened shared application modules, bringing our company practical experience in scalable frontend development and dependable software quality.",
        dateRange: "December 2022 – April 2024",
        imageUrl: "https://devsense.co.za/wp3/wp-content/uploads/2026/09/experience-labournet.webp",
        imageAlt: "LabourNet team gathered outside the company office",
        developerImageUrl: "",
        developerImageAlt: "Antonio Ribeiro"
      },
      {
        teamMember: "Antonio Ribeiro",
        title: "Insurance Platforms (Fleetsure & Hollsure) - Askari",
        description: "Bringing insurance workflows to life through responsive digital platforms. Antonio led frontend development for Fleetsure and Hollsure, delivering Angular interfaces with integrated reporting, PDF invoicing and backend services. He brings our company the ability to turn complex operational requirements into connected digital experiences.",
        dateRange: "September 2021 – November 2022",
        imageUrl: "https://devsense.co.za/wp3/wp-content/uploads/2026/09/experience-askari.webp",
        imageAlt: "Askari company premises or team",
        developerImageUrl: "",
        developerImageAlt: "Antonio Ribeiro"
      },
      {
        teamMember: "Antonio Ribeiro",
        title: "Healthcare Website & Web Applications - Bestmed",
        description: "Strengthening the digital foundations of an established healthcare brand. Antonio enhanced Bestmed's web applications and contributed to its website rebuild alongside specialist partners, bringing our company experience improving existing platforms, integrating services and supporting reliable digital operations.",
        dateRange: "2018 – November 2022",
        imageUrl: "https://devsense.co.za/wp3/wp-content/uploads/2026/09/bestmed-1.webp",
        imageAlt: "Bestmed head office entrance in Pretoria",
        developerImageUrl: "",
        developerImageAlt: "Antonio Ribeiro"
      },
      {
        teamMember: "Che Ribeiro",
        title: "Test Card - Lorem Ipsum Project",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        dateRange: "Lorem Ipsum – Dolor Sit",
        imageUrl: null,
        imageAlt: "Team planning session, faces not shown",
        developerImageUrl: "",
        developerImageAlt: "Che Ribeiro"
      },
      {
        teamMember: "George Mathew",
        title: "Test Card - Lorem Ipsum Project",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        dateRange: "Lorem Ipsum – Dolor Sit",
        imageUrl: null,
        imageAlt: "Team planning session, faces not shown",
        developerImageUrl: "",
        developerImageAlt: "George Mathew"
      },
      {
        teamMember: "Marothi Mahlake",
        title: "Test Card - Lorem Ipsum Project",
        description: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        dateRange: "Lorem Ipsum – Dolor Sit",
        imageUrl: null,
        imageAlt: "Team planning session, faces not shown",
        developerImageUrl: "",
        developerImageAlt: "Marothi Mahlake"
      }
    ]
  }

  testimonials = {
    title: "Our Client Says",
    quotes: [
      {
        quote: "We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude.",
        image: "assets/images/testimonials/pic1.jpg",
        name: "Jack Metiyo",
        designation: "Web developer"
      },
      {
        quote: "Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project and design",
        image: "assets/images/testimonials/pic2.jpg",
        name: "Jack Metiyo",
        designation: "Web developer"
      },
      {
        quote: "We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude.",
        image: "assets/images/testimonials/pic3.jpg",
        name: "Jack Metiyo",
        designation: "Web developer"
      }
    ]
  }
}
