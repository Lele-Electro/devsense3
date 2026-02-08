import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home2-dark',
  templateUrl: './page-home2-dark.component.html',
  styleUrls: ['./page-home2-dark.component.scss'],
  standalone: false
})
export class PageHome2DarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about = {
    title: "Hello, I’m Romin, the creator behind Futur.",
    description: "<p>I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success.</p><p>We help to create strategies, design &development. We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude.</p>",
    image: "assets/images/about/p2.png",
    experience: "05",
    establishment: "2016"
  }

  whatWeDo = {
    title: "Skills",
    description: "We are digital design-driven agency that crafts immersive experiences that inspire in a digital world.",
    skills: [
      {
        title: "Photoshop",
        percent: "80"
      },
      {
        title: "Sketch",
        percent: "90"
      },
      {
        title: "Illustrator",
        percent: "95"
      },
      {
        title: "AutoCAD",
        percent: "73"
      },
      {
        title: "WordPress",
        percent: "95"
      }
    ]
  }

  services = {
    title: "Service",
    subtitle: "We share our knowledge so that users become creative.",
    description: "It is easy to get lost in a crowded street, the same rule apply to design. It has to be minimal, so that the end user will not fall in something that they do not want.",
    services: [
      {
        image: "assets/images/services/service-2/port-1.jpg",
        title: "Art direction",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        image: "assets/images/services/service-2/port-2.jpg",
        title: "Illustration",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        image: "assets/images/services/service-2/port-3.jpg",
        title: "2D & 3D animation",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      }, {
        image: "assets/images/services/service-2/port-4.jpg",
        title: "Front & Back-end development",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        image: "assets/images/services/service-2/port-5.jpg",
        title: "App development",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        image: "assets/images/services/service-2/port-6.jpg",
        title: "VR & AR development",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      }
    ]
  }

  clients = {
    title: "Our Clients",
    title2: "Clients",
    logos: [
      "assets/images/client-logo/logo1.png",
      "assets/images/client-logo/logo2.png",
      "assets/images/client-logo/logo3.png",
      "assets/images/client-logo/logo4.png",
      "assets/images/client-logo/logo5.png",
      "assets/images/client-logo/logo6.png"
    ]
  }

  process = {
    title: "Our Working Process",
    projects: [
      {
        type: "image",
        image: "assets/images/our-history/4.jpg",
        title: "",
        description: "",
        serial: ""
      },
      {
        type: "content",
        image: "",
        title: "Research for Project.",
        description: "I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone.",
        serial: "01"
      },
      {
        type: "image",
        image: "assets/images/our-history/1.jpg",
        title: "",
        description: "",
        serial: ""
      },
      {
        type: "content",
        image: "",
        title: "Design the Details.",
        description: "Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating.",
        serial: "02"
      },
      {
        type: "image",
        image: "assets/images/our-history/2.jpg",
        title: "",
        description: "",
        serial: ""
      },
      {
        type: "content",
        image: "",
        title: "Design Development And Testing.",
        description: "The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you.",
        serial: "03"
      }
    ]
  }

  awards = {
    image: "assets/images/services/aw-pic.jpg",
    description: "Awards received - We have received these due to our excellent graphics imagery and exciting creative work",
    awards: [
      {
        year: "2021",
        title: "National Portrait Gallery",
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. the floor looks at magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you."
      },
      {
        year: "2019",
        title: "MBAM / Livre Chihuly",
        description: "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower."
      },
      {
        year: "2018",
        title: "The Type Directors Club 60",
        description: "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      },
      {
        year: "2017",
        title: "Naturiste / Identité 100 moods",
        description: "sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo."
      }
    ]
  }

  team = {
    title: "Providing a customized experience",
    members: [
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Johnny Jackman",
        designation: "Co-Founder, Devsense. Media",
      },
      {
        image: "assets/images/our-team5/2.jpg",
        name: "Daniel Rickman",
        designation: "CEO, Devsense. Media",
      },
      {
        image: "assets/images/our-team5/6.jpg",
        name: "Daniel Rickman",
        designation: "CEO, Devsense. Media",
      },
      {
        image: "assets/images/our-team5/7.jpg",
        name: "Mark Norwich",
        designation: "Co-Founder, Devsense. Media",
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

  blogs = {
    title: "Latest News",
    posts: [
      {
        image: "assets/images/blog/blog-grid/pic2.jpg",
        date: "08.02.21",
        author: "Admin",
        title: "How To Know When The Work is Complete",
        description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
      },
      {
        image: "assets/images/blog/blog-grid/pic3.jpg",
        date: "10.02.21",
        author: "Admin",
        title: "The Role of Four Design in Development",
        description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
      },
      {
        image: "assets/images/blog/blog-grid/pic6.jpg",
        date: "18.02.21",
        author: "Admin",
        title: "Build a Beautiful Blog With Ease",
        description: "Lorem ipsum dolor amet, consectetur adipiscing . Suspendisse pretium nibh lacus interdum tincidunt. Phasellus vehicula neque tortor."
      }
    ]
  }

  counter = [
    {
      count: "24",
      title: "Happy Clients"
    },
    {
      count: "340",
      title: "Complete Projects"
    },
    {
      count: "86",
      title: "Downloaded files"
    },
    {
      count: "36",
      title: "Awarded wins"
    }
  ]

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
