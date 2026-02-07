import { Component, inject, OnInit, input } from '@angular/core';
import { WPPost } from 'src/app/interfaces/wordpress';
import { WordpressService } from 'src/app/services/wordpress.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-about-company2',
  templateUrl: './section-about-company2.component.html',
  styleUrls: ['./section-about-company2.component.scss'],
  imports: [RouterLink]
})
export class SectionAboutCompany2Component implements OnInit {

  private wpService = inject(WordpressService);
  readonly data = input<any>();
  aboutUsOne: WPPost | undefined = {} as WPPost;

  constructor() { }

  ngOnInit(): void {

  }
}
