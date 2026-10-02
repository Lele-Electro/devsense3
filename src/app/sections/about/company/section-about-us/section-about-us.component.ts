import { Component, input } from '@angular/core';

export interface AboutUsCard {
  tag: string;
  title: string;
  paragraphs: string[];
}

export interface AboutUsContent {
  heading: { label: string; title: string; lede: string };
  cards: AboutUsCard[];
}

@Component({
  selector: 'app-section-about-us',
  templateUrl: './section-about-us.component.html',
  styleUrls: ['./section-about-us.component.scss'],
  standalone: true
})
export class SectionAboutUsComponent {

  readonly data = input.required<AboutUsContent>();

}
