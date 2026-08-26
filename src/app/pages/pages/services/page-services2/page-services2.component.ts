import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { SectionCounter2Component } from '../../../../sections/services/section-counter2/section-counter2.component';
import { SectionAwards1Component } from '../../../../sections/home/home2/section-awards1/section-awards1.component';
import { SectionOurServices1Component } from '../../../../sections/home/home2/section-our-services1/section-our-services1.component';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';

@Component({
    selector: 'app-page-services2',
    templateUrl: './page-services2.component.html',
    styleUrls: ['./page-services2.component.scss'],
    imports: [Header2Component, BannerComponent, SectionOurServices1Component, SectionAwards1Component, SectionCounter2Component, Footer1Component]
})
export class PageServices2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Service Style Two",
    currentPage: "Service 2",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
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
      },{
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

  counter = {
    background: "assets/images/background/bg-1.jpg",
    counters: [
      {
        title: "Projects Created",
        count: "256",
        k: "0"
      },
      {
        title: "Cups of Coffee",
        count: "995",
        k: "0"
      },
      {
        title: "Satisfied Customers",
        count: "5.7",
        k: "2"
      },
      {
        title: "Nominees & Awards",
        count: "135",
        k: "1"
      }
    ]
  }
}
