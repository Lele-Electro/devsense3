import { Component, effect, inject, OnInit } from '@angular/core';
import { Footer1Component } from '../../../../sections/footer/footer1/footer1.component';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../../../sections/banner/banner.component';
import { Header1Component } from '../../../../sections/header/header1/header1.component';
import { HelperService } from 'src/app/services/helper.service';
import { WordpressService } from 'src/app/services/wordpress.service';
import { PortfolioItem } from 'src/app/interfaces/website-content';
import { WPPost } from 'src/app/interfaces/wordpress';

@Component({
  selector: 'app-page-grid4col',
  templateUrl: './page-grid4col.component.html',
  styleUrls: ['./page-grid4col.component.scss'],
  imports: [Header1Component, BannerComponent, RouterLink, Footer1Component]
})
export class PageGrid4colComponent implements OnInit {
  wpService = inject(WordpressService);
  helperService = inject(HelperService);
  portfolioItems: PortfolioItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }


}
