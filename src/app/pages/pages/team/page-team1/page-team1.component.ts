import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-team1',
  templateUrl: './page-team1.component.html',
  styleUrls: ['./page-team1.component.scss']
})
export class PageTeam1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Our Experts",
    currentPage: "Team",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  team = [
    {
      image: "assets/images/our-team5/1.jpg",
      name: "Johnny Jackman",
      designation: "Co-Founder, Anih. Media"
    },
    {
      image: "assets/images/our-team5/2.jpg",
      name: "Daniel Rickman",
      designation: "CEO, Anih. Media"
    },
    {
      image: "assets/images/our-team5/3.jpg",
      name: "Mark Norwich",
      designation: "Co-Founder, Anih. Media"
    },
    {
      image: "assets/images/our-team5/4.jpg",
      name: "Nich Jonas",
      designation: "CEO, Anih. Media"
    },
    {
      image: "assets/images/our-team5/5.jpg",
      name: "Johnny Jackman",
      designation: "Co-Founder, Anih. Media"
    },
    {
      image: "assets/images/our-team5/6.jpg",
      name: "Daniel Rickman",
      designation: "CEO, Anih. Media"
    },
    {
      image: "assets/images/our-team5/7.jpg",
      name: "Mark Norwich",
      designation: "Co-Founder, Anih. Media"
    },
    {
      image: "assets/images/our-team5/8.jpg",
      name: "Nich Jonas",
      designation: "CEO, Anih. Media"
    }
  ]
}
