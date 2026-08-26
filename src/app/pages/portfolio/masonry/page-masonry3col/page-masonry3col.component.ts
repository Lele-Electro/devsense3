import { Component, inject, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-page-masonry3col',
  templateUrl: './page-masonry3col.component.html',
  styleUrls: ['./page-masonry3col.component.scss'],
  imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageMasonry3colComponent implements OnInit {
  wpService = inject(WordpressService);

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Masonry 3 Columns",
    currentPage: "Project-Masonry",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }
}
