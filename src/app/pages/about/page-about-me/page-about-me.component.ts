import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { SectionOurTeam1Component } from '../../../sections/home/home2/section-our-team1/section-our-team1.component';
import { SectionCounter1Component } from '../../../sections/home/home2/section-counter1/section-counter1.component';
import { SectionWhatWeDo1Component } from '../../../sections/home/home2/section-what-we-do1/section-what-we-do1.component';
import { SectionProjects2Component } from '../../../sections/about/me/section-projects2/section-projects2.component';
import { SectionAboutCompany2Component } from '../../../sections/home/home2/section-about-company2/section-about-company2.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header1Component } from '../../../sections/header/header1/header1.component';

@Component({
    selector: 'app-page-about-me',
    templateUrl: './page-about-me.component.html',
    styleUrls: ['./page-about-me.component.scss'],
    standalone: true,
    imports: [Header1Component, BannerComponent, SectionAboutCompany2Component, SectionProjects2Component, SectionWhatWeDo1Component, SectionCounter1Component, SectionOurTeam1Component, Footer1Component]
})
export class PageAboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "About Me",
    currentPage: "About Me",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }
  
  about = {
    title: "Hello, I’m Romin, the creator behind Futur.",
    description: "<p>I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success.</p><p>We help to create strategies, design &development. We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude.</p>",
    image: "assets/images/about/p2.png",
    experience: "05",
    establishment: "2016"
  }

  projects = [
    {
      image: "assets/images/projects/land/land-1.jpg",
      title: "Photography",
      subtitle: "Graphic Studio",
      imageLarge: "assets/images/projects/land/land-1.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-2.jpg",
      title: "Branding",
      subtitle: "Branding, Print",
      imageLarge: "assets/images/projects/land/land-2.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-3.jpg",
      title: "Ui/Ux & interaction",
      subtitle: "Print, Packaging",
      imageLarge: "assets/images/projects/land/land-3.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-4.jpg",
      title: "Graphic design",
      subtitle: "Advetising",
      imageLarge: "assets/images/projects/land/land-4.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-5.jpg",
      title: "Animation & motion",
      subtitle: "Media Marketing",
      imageLarge: "assets/images/projects/land/land-5.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-6.jpg",
      title: "Development",
      subtitle: "Game Development",
      imageLarge: "assets/images/projects/land/land-6.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-7.jpg",
      title: "Web Design",
      subtitle: "Project Design",
      imageLarge: "assets/images/projects/land/land-7.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    },
    {
      image: "assets/images/projects/land/land-8.jpg",
      title: "Web Design",
      subtitle: "Project Design",
      imageLarge: "assets/images/projects/land/land-8.jpg",
      title2: "Energy",
      subtitle2: "Regulatory Compliance System",
      author: "someone"
    }
  ]

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

  team = {
    title: "Providing a customized experience",
    members: [
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Johnny Jackman",
        designation: "Co-Founder, Anih. Media",
      },
      {
        image: "assets/images/our-team5/2.jpg",
        name: "Daniel Rickman",
        designation: "CEO, Anih. Media",
      },
      {
        image: "assets/images/our-team5/6.jpg",
        name: "Daniel Rickman",
        designation: "CEO, Anih. Media",
      },
      {
        image: "assets/images/our-team5/7.jpg",
        name: "Mark Norwich",
        designation: "Co-Founder, Anih. Media",
      }
    ]
  }
}
