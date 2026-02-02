import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionPricing1Component } from '../../../../sections/home/home2/section-pricing1/section-pricing1.component';
import { SectionOurServices2Component } from '../../../../sections/services/section-our-services2/section-our-services2.component';
import { SectionOurClients3Component } from '../../../../sections/services/section-our-clients3/section-our-clients3.component';
import { SectionBrandingComponent } from '../../../../sections/services/section-branding/section-branding.component';
import { SectionSkills1Component } from '../../../../sections/home/home1/section-skills1/section-skills1.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-services1',
    templateUrl: './page-services1.component.html',
    styleUrls: ['./page-services1.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, SectionSkills1Component, SectionBrandingComponent, SectionOurClients3Component, SectionOurServices2Component, SectionPricing1Component, Footer1Component]
})
export class PageServices1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Service Style One",
    currentPage: "Services 1",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  skills = {
    title: "My Skills",
    description: "We are proficient in these tasks. We like to make things simple and efficient.",
    skills: [
      {
        title: "Photoshop",
        percentage: "80"
      },
      {
        title: "Sketch",
        percentage: "90"
      },
      {
        title: "Illustrator",
        percentage: "95"
      },
      {
        title: "AutoCAD",
        percentage: "73"
      }
    ],
    services: [
      {
        icon: "flaticon-sketch",
        title: "Graphic design & Branding",
        description: "We build and activate brands throung cultural insight, strategic vision, and the power of emotion"
      },
      {
        icon: "flaticon-layers",
        title: "Animation & motion",
        description: "Impressive and communicate with your clients better throung animation & motion video"
      },
      {
        icon: "flaticon-picture",
        title: "Ui/Ux & interaction",
        description: "Our websites, platforms and apps are built for the way your users behave to ensure an experience."
      },
      {
        icon: "flaticon-id-card",
        title: "Branding Identity",
        description: "Ultimate experiences with emotion and purpose. We know that good design mean good business"
      }
    ]
  }

  branding = {
    title: "Branding",
    background: "assets/images/background/bg-9.jpg",
    specifications: [
      {
        serial: "01",
        title: "Art direction",
        description: "We combine Interior and Exterior Design services and often provide them..."
      },
      {
        serial: "02",
        title: "Illustration",
        description: "Landscape plans for drainage problems may also entail planting beds away..."
      },
      {
        serial: "03",
        title: "2D & 3D animation",
        description: "We offer comprehensive Architectural Engineering Services including..."
      },
      {
        serial: "04",
        title: "Sound design",
        description: "We provide a range of architectural 3D modeling services to our..."
      },
      {
        serial: "05",
        title: "Motion design",
        description: "Project management is the process by which our team plans and executes..."
      },
      {
        serial: "06",
        title: "User experiense design",
        description: "Our team also provides consultations on all architectural issues..."
      }
    ]
  }

  clients = [
    "assets/images/client-logo/logo1.png",
    "assets/images/client-logo/logo2.png",
    "assets/images/client-logo/logo3.png",
    "assets/images/client-logo/logo4.png",
    "assets/images/client-logo/logo5.png",
    "assets/images/client-logo/logo6.png"
  ]

  services = {
    title: "Media Strategy",
    strategies: [
      {
        serial: "01",
        title: "Front-end development",
        description: "We combine Interior and Exterior Design services and often provide them..."
      },
      {
        serial: "02",
        title: "Back-end development",
        description: "Landscape plans for drainage problems may also entail planting beds away..."
      },
      {
        serial: "03",
        title: "Creative development",
        description: "We offer comprehensive Architectural Engineering Services including..."
      },
      {
        serial: "04",
        title: "App development",
        description: "We provide a range of architectural 3D modeling services to our..."
      },
      {
        serial: "05",
        title: "VR & AR development",
        description: "Project management is the process by which our team plans and executes..."
      }
    ]
  }

  pricing = {
    title: "Our Plan",
    plans: [
      {
        title: "Basic Plan",
        price: "$29",
        tenure: "Month",
        features: [
          "SEO Optimization",
          "Professional Support",
          "Software Updating",
          "Lifetime Features"
        ]
      },
      {
        title: "Pro Plan",
        price: "$39",
        tenure: "Month",
        features: [
          "SEO Optimization",
          "Professional Support",
          "Software Updating",
          "Lifetime Features"
        ]
      },
      {
        title: "Premium Plan",
        price: "$49",
        tenure: "Month",
        features: [
          "SEO Optimization",
          "Professional Support",
          "Software Updating",
          "Lifetime Features"
        ]
      }
    ]
  }
}
