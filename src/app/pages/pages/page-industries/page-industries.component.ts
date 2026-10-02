import { Component } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

export interface IndustryCard {
  tag: string;
  title: string;
  paragraphs: string[];
}

export interface IndustriesContent {
  heading: { label: string; title: string; lede: string };
  cards: IndustryCard[];
}

export const INDUSTRIES: IndustriesContent = {
  heading: {
    label: 'Industries',
    title: 'Six sectors, deeply. Not thirty, shallowly.',
    lede: 'Financial services, retail, government, healthcare, mining, logistics and the SME market.'
  },
  cards: [
    {
      tag: 'Sector',
      title: 'Financial services & fintech',
      paragraphs: [
        'Banks, insurers, lenders and fintech startups operating under real regulatory scrutiny.',
        'Immutable audit trails, least-privilege access and encryption at rest and in transit are designed in from the architecture stage — not added the month before an audit.'
      ]
    },
    {
      tag: 'Sector',
      title: 'Retail & e-commerce',
      paragraphs: [
        'Retailers and brands who need the digital channel to behave exactly like the store.',
        'The hard part is rarely the storefront. It is keeping stock, price and order state truthful across the ERP, the warehouse and three courier APIs.'
      ]
    },
    {
      tag: 'Sector',
      title: 'Government & state-owned enterprises',
      paragraphs: [
        'National departments, municipalities and SOEs delivering services to the public.',
        'Public-sector work carries procurement, accessibility and record-keeping obligations that shape the architecture. We build to them rather than retrofitting.'
      ]
    },
    {
      tag: 'Sector',
      title: 'Healthcare & medtech',
      paragraphs: [
        'Private hospital groups, medical schemes and telehealth providers.',
        'Patient data attracts the strictest handling requirements of any sector we work in. Access control and consent are first-class parts of the data model.'
      ]
    },
    {
      tag: 'Sector',
      title: 'Mining & resources',
      paragraphs: [
        'Operations where connectivity is intermittent and unplanned downtime is measured in millions.',
        'Underground and remote-site apps are designed offline-first: capture locally, reconcile on reconnection, never lose a shift of data.'
      ]
    },
    {
      tag: 'Sector',
      title: 'Logistics, education & the SME market',
      paragraphs: [
        'Supply-chain operators, education providers and mid-sized firms without an in-house engineering team.',
        'For SMEs, the answer is often a small, sharp platform plus an outsourced team to run it — which is precisely what our Tech-BPO division exists to provide.'
      ]
    }
  ]
};

@Component({
  selector: 'app-page-industries',
  templateUrl: './page-industries.component.html',
  styleUrls: ['./page-industries.component.scss'],
  imports: [Header2Component, BannerComponent, Footer1Component]
})
export class PageIndustriesComponent {
  banner = {
    background: 'assets/images/our-process/live-reporting.jpg',
    title: 'Industries',
    currentPage: 'Industries',
    description: 'Industries we serve.'
  };

  readonly content = INDUSTRIES;
}
