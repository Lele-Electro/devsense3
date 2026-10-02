import { Component } from '@angular/core';
import { Footer1Component } from '../../../sections/footer/footer1/footer1.component';
import { BannerComponent } from '../../../sections/banner/banner.component';
import { Header2Component } from '../../../sections/header/header2/header2.component';

interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  number: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  siteImage: ProductImage;
  appImage: ProductImage;
}

export interface OurProductsContent {
  heading: { label: string; title: string; lede: string };
  products: Product[];
}

const IMAGES = 'assets/images/our-products';

export const OUR_PRODUCTS: OurProductsContent = {
  heading: {
    label: 'Selected work',
    title: 'Products we designed and built.',
    lede: 'Three we can talk about, with the reasoning behind the decisions rather than a logo wall.'
  },
  products: [
    {
      number: '01',
      title: 'SalesAI',
      subtitle: 'Close more deals with AI sales intelligence',
      paragraphs: [
        'A sales platform that finds prospects matching an ideal customer profile, scores them, drafts the outreach, and handles the early back-and-forth — so a small sales team can work a pipeline that would normally need a bigger one.',
        'Sales teams lose most of their week to work that is not selling: building lists, researching accounts, rewriting the same email for the twentieth prospect, and keeping the pipeline honest. The tools that solve each piece do not talk to each other, so the context is rebuilt by hand every time.',
        'Both the marketing site and the working product interface were designed and built in-house — the same team, one visual language across the two.'
      ],
      siteImage: { src: `${IMAGES}/salesai-site.jpg`, alt: 'SalesAI marketing site' },
      appImage: { src: `${IMAGES}/salesai-app.jpg`, alt: 'SalesAI product interface' }
    },
    {
      number: '02',
      title: 'Finova AI',
      subtitle: 'Accounting that speaks plain English',
      paragraphs: [
        'An accounting platform built for South African small businesses — rands, VAT and SARS deadlines as first-class concepts rather than a localisation afterthought. The AI layer explains the numbers instead of just producing them.',
        'Small business owners do not want a general ledger. They want to know whether they can make payroll, which invoice to chase first, and whether the VAT payment is going to hurt. Traditional accounting software answers the accountant’s questions, not the owner’s.',
        'The dashboard leads with an AI briefing — what changed, what needs attention, and what has already been drafted for approval — before any chart.'
      ],
      siteImage: { src: `${IMAGES}/finova-site.jpg`, alt: 'Finova AI marketing site' },
      appImage: { src: `${IMAGES}/finova-app.jpg`, alt: 'Finova AI product interface' }
    },
    {
      number: '03',
      title: 'BCC Legal',
      subtitle: 'Client intake, document drafting and an AI legal assistant',
      paragraphs: [
        'A law firm web app: a public practice-area site, a client intake pipeline that lands straight in the firm’s database, a guided document generator, and an AI assistant that answers general legal questions without pretending to be advice.',
        'Small firms lose fee-earning hours to intake admin and first-draft paperwork. Enquiries arrive by phone and email and get retyped into a matter file; standard documents get rebuilt from the last similar one; and the same handful of questions get answered by a solicitor at solicitor rates.',
        'Built on Vite Flare Starter, an MIT-licensed Cloudflare Workers agent kit. The platform underneath — auth, chat, admin, agent tooling — is that project’s. Ours is the law-firm layer on top: the marketing site, the intake pipeline end to end, the document generator, the legal assistant and the admin views. Starting from a maintained base is the reason it took weeks rather than months.'
      ],
      siteImage: { src: `${IMAGES}/bcc-legal.jpg`, alt: 'BCC Legal marketing site' },
      appImage: { src: `${IMAGES}/bcc-legal-documents.jpg`, alt: 'BCC Legal product interface' }
    }
  ]
};

@Component({
  selector: 'app-page-our-products',
  templateUrl: './page-our-products.component.html',
  styleUrls: ['./page-our-products.component.scss'],
  imports: [Header2Component, BannerComponent, Footer1Component]
})
export class PageOurProductsComponent {
  banner = {
    background: 'assets/images/our-process/scope-process-capture.jpg',
    title: 'Our Products',
    currentPage: 'Our Products',
    description: 'Products Devsense designed and built — SalesAI, Finova AI and BCC Legal.'
  };

  readonly content = OUR_PRODUCTS;
}
