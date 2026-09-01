import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

@Component({
  selector: 'app-page-faq',
  templateUrl: './page-faq.component.html',
  styleUrls: ['./page-faq.component.scss'],
  imports: [Header2Component, BannerComponent, Footer1Component]
})
export class PageFaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/faq-banner.webp",
    title: "FAQ's",
    currentPage: "Faq",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  faqs = {
    style1: [
      {
        que: "Design & technology for the new age, one step at the time.",
        ans: "Everything looks better with a beautiful image. With themes from Select, it’s simple to add single images and whole image galleries to pages and sections.We work with a diverse selection of clients, from small start-ups to established companies and organisations, delivering bespoke solutions rooted in usability."
      },
      {
        que: "Our skillful team’s work splits between Design and Technology.",
        ans: "A girl should be two things: classy and fabulous. Over the years I have learned that what is important in a dress is the woman who is wearing it.Made fruit moved void Good. Hath seed shall years replenish form him sea spirit don’t had. Beast. Appear bearing seasons cattle appear earth male moved give midst seed in you’ll likeness earth herb yielding.."
      },
      {
        que: "Experience design and intelligent marketing for growing brands.",
        ans: "Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled.Creating a higher spacing and how people move through a unique and impactful campaign."
      },
      {
        que: "Design & concept at work. What’s the difference? Discover it..",
        ans: "Graphic design lorem Ipsum is simply Creating a higher spacing and how people move through a unique and impactful campaign. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled."
      }
    ],
    style2: [
      {
        que: "When to consult for our services?",
        ans: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      },
      {
        que: "Ways we can architect our company?",
        ans: "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower. Gregor then turned to look out the window at the dull weather"
      },
      {
        que: "Do I have to commit to a contract?",
        ans: "Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
      },
      {
        que: "When to consult for our services?",
        ans: "sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo."
      }
    ],
    style3: [
      {
        que: "How do we work?",
        ans: "Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards."
      },
      {
        que: "What services do we offer?",
        ans: "Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
      },
      {
        que: "Why do you have a design fee on the product?",
        ans: "Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
      },
      {
        que: "How long will it take to to design and build my project?",
        ans: "Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
      }
    ]
  }
}
