import { Component, inject, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-page-grid3col-nogut',
  templateUrl: './page-grid3col-nogut.component.html',
  styleUrls: ['./page-grid3col-nogut.component.scss'],
  imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageGrid3colNogutComponent implements OnInit {
  wpService = inject(WordpressService);

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Grid 3 Columns No Gap",
    currentPage: "Project-grid",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }
}
