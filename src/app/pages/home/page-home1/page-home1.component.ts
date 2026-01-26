import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home1',
  templateUrl: './page-home1.component.html',
  styleUrls: ['./page-home1.component.css']
})
export class PageHome1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    image: "assets/images/about/p1.jpg",
    title: "About us",
    description: "We help to create strategies, design &development. We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude.",
    experience: "05",
    description2: "We are a branding agency with over seven hundred projects under our belt. We help to create strategy, design and development.",
    established: "2016"
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

  projects = {
    title: "Our Portfolio",
    categories: [
      {
        class: "*",
        title: "All Projects"
      },
      {
        class: ".col-one",
        title: "Branding"
      },
      {
        class: ".col-two",
        title: "Web Design"
      },
      {
        class: ".col-three",
        title: "Development"
      },
      {
        class: ".col-four",
        title: "Ui Dexign"
      },
      {
        class: ".col-five",
        title: "Photogrphy"
      }
    ],
    projects: [
      {
        category: "col-one",
        image: "assets/images/projects/portrait/port-1.jpg",
        title: "Photografhy",
        subtitle: "Graphic Studio",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-1.jpg"
      },
      {
        category: "col-two",
        image: "assets/images/projects/portrait/port-2.jpg",
        title: "Branding",
        subtitle: "Branding , Prin",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-2.jpg"
      },
      {
        category: "col-three",
        image: "assets/images/projects/portrait/port-3.jpg",
        title: "Ui/Ux & interaction",
        subtitle: "Print , Packaging",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-3.jpg"
      },
      {
        category: "col-three",
        image: "assets/images/projects/portrait/port-4.jpg",
        title: "Graphic design",
        subtitle: "Advetising",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-4.jpg"
      },
      {
        category: "col-four col-two",
        image: "assets/images/projects/portrait/port-5.jpg",
        title: "Animation & motion",
        subtitle: "Media Marketing",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-5.jpg"
      },
      {
        category: "col-five",
        image: "assets/images/projects/portrait/port-6.jpg",
        title: "Development",
        subtitle: "Game Development",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-6.jpg"
      },
      {
        category: "col-four",
        image: "assets/images/projects/portrait/port-7.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/portrait/port-7.jpg"
      }
    ]
  }

  clients = {
    title: "Our Client",
    description: "It is easy to get lost in a crowded street, the same rule apply to design. It has to be minimal, so that the end user will not fall in something that they do not want.",
    clients: [
      "assets/images/client-logo/logo1.png",
      "assets/images/client-logo/logo2.png",
      "assets/images/client-logo/logo3.png",
      "assets/images/client-logo/logo4.png",
      "assets/images/client-logo/logo5.png",
      "assets/images/client-logo/logo6.png",
      "assets/images/client-logo/logo7.png",
      "assets/images/client-logo/logo8.png",
      "assets/images/client-logo/logo2.png",
      "assets/images/client-logo/logo4.png",
      "assets/images/client-logo/logo5.png",
      "assets/images/client-logo/logo6.png"
    ]
  }

  blogs = {
    title: "Latest Articles",
    blogs: [
      {
        category: "Tips & Trics",
        title: "How to combine Typography perfect for any field of the life?",
        month: "June",
        day: "28",
        year: "2023"
      },
      {
        category: "Products",
        title: "Workflow & Enhance the User Experience with Design System",
        month: "May",
        day: "28",
        year: "2023"
      },
      {
        category: "Inspiration",
        title: "How to Create a Vintage Magazine Effect in a Sergey",
        month: "May",
        day: "28",
        year: "2023"
      }
    ]
  }

  testimonials = {
    title: "Happy Clients to Says!",
    sectionImage: "assets/images/testimonial-bg.jpg",
    quotes: [
      {
        quote: "Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project",
        image: "assets/images/testimonials/pic1.jpg",
        name: "Jack Metiyo",
        designation: "Web developer"
      },
      {
        quote: "Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project",
        image: "assets/images/testimonials/pic2.jpg",
        name: "Johnny Jackman",
        designation: "Co-Founder, Anih. Media"
      },
      {
        quote: "Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project",
        image: "assets/images/testimonials/pic3.jpg",
        name: "Mark Norwich",
        designation: "CEO, Anih. Media"
      }
    ]
  }

  contact = {
    title: "Get in touch",
    description1: "Feel free to contact for any questions, help, or services!",
    description2: "Feel free to contact for any questions or any help or services! We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.",
    address: "650 Dundee Rd # 380, Northbrook, IL 60062, United States",
    emails: "contact@robert.com , help@robert.com",
    numbers: "+1 848-840-0402 , +1 849-920-0305"
  }
}
