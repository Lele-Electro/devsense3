import { Component, inject, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header2Component } from '../../../../sections/header/header2/header2.component';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-page-grid5col',
  templateUrl: './page-grid5col.component.html',
  styleUrls: ['./page-grid5col.component.scss'],
  imports: [Header2Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageGrid5colComponent implements OnInit {
  wpService = inject(WordpressService);

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Grid 5 Columns",
    currentPage: "Project-grid",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }
}
