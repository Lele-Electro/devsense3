import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about-company',
  templateUrl: './page-about-company.component.html',
  styleUrls: ['./page-about-company.component.scss']
})
export class PageAboutCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
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
    image: "assets/images/our-history/1.jpg",
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
    title: "Providing a customized experience",
    team: [
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Johnny Jackman",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/2.jpg",
        name: "Daniel Rickman",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/3.jpg",
        name: "Mark Norwich",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/4.jpg",
        name: "Johnny Jackman",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/5.jpg",
        name: "Daniel Rickman",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/6.jpg",
        name: "Mark Norwich",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/7.jpg",
        name: "Johnny Jackman",
        designation: "Architect"
      },
      {
        image: "assets/images/our-team5/8.jpg",
        name: "Daniel Rickman",
        designation: "Architect"
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
