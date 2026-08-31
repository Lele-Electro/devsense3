import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';

interface TeamMember {
  image: string;
  hoverImage?: string;
  isHovered?: boolean;
  subtleHoverZoom?: boolean;
  name: string;
  designation: string;
}

@Component({
  selector: 'app-page-team1',
  templateUrl: './page-team1.component.html',
  styleUrls: ['./page-team1.component.scss'],
  imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageTeam1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/devsense-team-office-768x576.png",
    title: "Our Experts",
    currentPage: "Team",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  team: TeamMember[] = [
    {
      image: "assets/images/our-team5/che-face.png",
      hoverImage: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/che-face-on-hover-1.png",
      name: "Che Ribeiro",
      designation: "CEO, Devsense. Media"
    },

    {
      image: "assets/images/our-team5/george-face.png",
      hoverImage: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/george-face-on-hover-new.png",
      subtleHoverZoom: true,
      name: "Daniel Rickman",
      designation: "CEO, Devsense. Media"
    },
    {
      image: "assets/images/our-team5/toni-face.png",
      hoverImage: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/toni-face-on-hover-4.png",
      name: "Toni (Lebogang) Ribeiro",
      designation: "Our tech guy"
    },
    {
      image: "assets/images/our-team5/marothi-face.png",
      hoverImage: "https://devsense.co.za/wp3/wp-content/uploads/2026/08/marothi-face-on-hover.png",
      subtleHoverZoom: true,
      name: "Mark Norwich",
      designation: "Co-Founder, Devsense. Media"
    },
    {
      image: "assets/images/our-team5/5.jpg",
      name: "Johnny Jackman",
      designation: "Co-Founder, Devsense. Media"
    },
    {
      image: "assets/images/our-team5/6.jpg",
      name: "Daniel Rickman",
      designation: "CEO, Devsense. Media"
    },
    {
      image: "assets/images/our-team5/7.jpg",
      name: "Mark Norwich",
      designation: "Co-Founder, Devsense. Media"
    },
    {
      image: "assets/images/our-team5/8.jpg",
      name: "Nich Jonas",
      designation: "CEO, Devsense. Media"
    }
  ]
}
