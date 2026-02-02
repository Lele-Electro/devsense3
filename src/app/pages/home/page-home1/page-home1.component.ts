import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionContact1Component } from '../../../sections/home/home1/section-contact1/section-contact1.component';
import { SectionTestimonials1Component } from '../../../sections/home/home1/section-testimonials1/section-testimonials1.component';
import { SectionBlogs1Component } from '../../../sections/home/home1/section-blogs1/section-blogs1.component';
import { SectionOurClients1Component } from '../../../sections/home/home1/section-our-clients1/section-our-clients1.component';
import { SectionProjects1Component } from '../../../sections/home/home1/section-projects1/section-projects1.component';
import { SectionSkills1Component } from '../../../sections/home/home1/section-skills1/section-skills1.component';
import { SectionAboutCompany1Component } from '../../../sections/home/home1/section-about-company1/section-about-company1.component';
import { SectionSlider1Component } from '../../../sections/home/home1/section-slider1/section-slider1.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-home1',
    templateUrl: './page-home1.component.html',
    styleUrls: ['./page-home1.component.scss'],
    standalone: true,
    imports: [
        Header1Component,
        SectionSlider1Component,
        SectionAboutCompany1Component,
        SectionSkills1Component,
        SectionProjects1Component,
        SectionOurClients1Component,
        SectionBlogs1Component,
        SectionTestimonials1Component,
        SectionContact1Component,
        Footer1Component,
    ],
})
export class PageHome1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  about = {
    image: 'assets/images/about/p1.jpg',
    title: 'About Us',
    description:
      'DevSense: Your expert IT partner with over 5 years of experience. Our seasoned developers craft elegant digital solutions, from scalable web platforms and intuitive UX to seamless cloud integrations. We deliver not just code, but clarity, speed, and a commitment to your success.',
    experience: '05',
    description2:
      'As a premier Software Development Company, we specialize in modernizing applications. We deliver scalable, secure, and modular solutions with robust API integrations, adhering to enterprise-level security and best practices to drive your business forward.',
    established: '2016',
  };

  skills = {
    title: 'Our Expertise',
    description: 'With a strong foundation in diverse technologies and a commitment to excellence, we deliver innovative solutions that drive success and foster growth for our clients.',
    skills: [
      {
        title: 'Java (Micronaut/ Quarkus) - Microservices forward',
        percentage: '80',
      },
      {
        title: 'C# (.NET)',
        percentage: '90',
      },
      {
        title: 'Angular (Enterprise Grade Web UIs)',
        percentage: '95',
      },
      {
        title: 'WordPress (Headless CMS & Custom Tailored UIs with REST APIs and tighter Security)',
        percentage: '73',
      },
      {
        title: 'Database Design & Administration (SQL, NoSQL, Event-Driven)',
        percentage: '96',
      },
    ],
    services: [
      {
        icon: 'flaticon-sketch',
        title: 'Web Application Development',
        description:
          'We build responsive, user-friendly web applications tailored to your business needs, ensuring seamless performance across all devices.',
      },
      {
        icon: 'flaticon-layers',
        title: 'Mobile Application Development',
        description:
          'Our team creates intuitive mobile apps for both iOS and Android platforms, delivering exceptional user experiences on the go.',
      },
      // {
      //   icon: 'flaticon-picture',
      //   title: 'Ui/Ux & interaction',
      //   description:
      //     'We design engaging user interfaces and experiences that captivate your audience and enhance usability across all digital touchpoints.',
      // },
      {
        icon: 'flaticon-email',
        title: 'Application & Email Hosting',
        description:
          'We provide reliable application and email hosting solutions, ensuring your services are secure, scalable, and always accessible.',
      },
      {
        icon: 'flaticon-business-graphic-with-semicircles',
        title: 'Database Architecture & Management',
        description:
          'We architect and manage robust database solutions, from traditional SQL (PostgreSQL, MySQL) to modern NoSQL (MongoDB, CosmosDB) and event-driven systems, ensuring data integrity and performance.',
      },
    ],
  };

  projects = {
    title: 'Our Portfolio',
    categories: [
      {
        class: '*',
        title: 'All Projects',
      },
      {
        class: '.col-one',
        title: 'Branding',
      },
      {
        class: '.col-two',
        title: 'Web Design',
      },
      {
        class: '.col-three',
        title: 'Development',
      },
      {
        class: '.col-four',
        title: 'Ui Dexign',
      },
      {
        class: '.col-five',
        title: 'Photogrphy',
      },
    ],
    projects: [
      {
        category: 'col-one',
        image: 'assets/images/projects/portrait/port-1.jpg',
        title: 'Photografhy',
        subtitle: 'Graphic Studio',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-1.jpg',
      },
      {
        category: 'col-two',
        image: 'assets/images/projects/portrait/port-2.jpg',
        title: 'Branding',
        subtitle: 'Branding , Prin',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-2.jpg',
      },
      {
        category: 'col-three',
        image: 'assets/images/projects/portrait/port-3.jpg',
        title: 'Ui/Ux & interaction',
        subtitle: 'Print , Packaging',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-3.jpg',
      },
      {
        category: 'col-three',
        image: 'assets/images/projects/portrait/port-4.jpg',
        title: 'Graphic design',
        subtitle: 'Advetising',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-4.jpg',
      },
      {
        category: 'col-four col-two',
        image: 'assets/images/projects/portrait/port-5.jpg',
        title: 'Animation & motion',
        subtitle: 'Media Marketing',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-5.jpg',
      },
      {
        category: 'col-five',
        image: 'assets/images/projects/portrait/port-6.jpg',
        title: 'Development',
        subtitle: 'Game Development',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-6.jpg',
      },
      {
        category: 'col-four',
        image: 'assets/images/projects/portrait/port-7.jpg',
        title: 'Web Design',
        subtitle: 'Project Design',
        title2: 'Energy',
        subtitle2: 'Regulatory Compliance System',
        author: 'someone',
        thumb: 'assets/images/projects/portrait/port-7.jpg',
      },
    ],
  };

  clients = {
    title: 'Our Client',
    description:
      'It is easy to get lost in a crowded street, the same rule apply to design. It has to be minimal, so that the end user will not fall in something that they do not want.',
    clients: [
      'assets/images/client-logo/logo1.png',
      'assets/images/client-logo/logo2.png',
      'assets/images/client-logo/logo3.png',
      'assets/images/client-logo/logo4.png',
      'assets/images/client-logo/logo5.png',
      'assets/images/client-logo/logo6.png',
      'assets/images/client-logo/logo7.png',
      'assets/images/client-logo/logo8.png',
      'assets/images/client-logo/logo2.png',
      'assets/images/client-logo/logo4.png',
      'assets/images/client-logo/logo5.png',
      'assets/images/client-logo/logo6.png',
    ],
  };

  blogs = {
    title: 'Latest Articles',
    blogs: [
      {
        category: 'Tips & Trics',
        title: 'How to combine Typography perfect for any field of the life?',
        month: 'June',
        day: '28',
        year: '2023',
      },
      {
        category: 'Products',
        title: 'Workflow & Enhance the User Experience with Design System',
        month: 'May',
        day: '28',
        year: '2023',
      },
      {
        category: 'Inspiration',
        title: 'How to Create a Vintage Magazine Effect in a Sergey',
        month: 'May',
        day: '28',
        year: '2023',
      },
    ],
  };

  testimonials = {
    title: 'Happy Clients to Says!',
    sectionImage: 'assets/images/testimonial-bg.jpg',
    quotes: [
      {
        quote:
          'Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project',
        image: 'assets/images/testimonials/pic1.jpg',
        name: 'Jack Metiyo',
        designation: 'Web developer',
      },
      {
        quote:
          'Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project',
        image: 'assets/images/testimonials/pic2.jpg',
        name: 'Johnny Jackman',
        designation: 'Co-Founder, Anih. Media',
      },
      {
        quote:
          'Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project',
        image: 'assets/images/testimonials/pic3.jpg',
        name: 'Mark Norwich',
        designation: 'CEO, Anih. Media',
      },
    ],
  };

  contact = {
    title: 'Get in touch',
    description1: 'Feel free to contact for any questions, help, or services!',
    description2:
      'Feel free to contact for any questions or any help or services! We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.',
    address: '650 Dundee Rd # 380, Northbrook, IL 60062, United States',
    emails: 'contact@robert.com , help@robert.com',
    numbers: '+1 848-840-0402 , +1 849-920-0305',
  };
}
