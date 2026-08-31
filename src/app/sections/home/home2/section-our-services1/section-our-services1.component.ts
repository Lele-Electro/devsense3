import { Component, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';
import { HelperService } from 'src/app/services/helper.service';
import { serviceCard } from 'src/app/interfaces/website-content';
import { SortByPipe } from 'src/app/pipes/sort-by.pipe';

@Component({
  selector: 'app-section-our-services1',
  templateUrl: './section-our-services1.component.html',
  styleUrls: ['./section-our-services1.component.scss'],
  imports: [RouterLink, SortByPipe]
})
export class SectionOurServices1Component {
  public wpService = inject(WordpressService);
  private helperService = inject(HelperService);

  readonly data = input<any>();
  serviceCards: serviceCard[] = [];
  servicesIntro: { title: string, paragraph: string } = { title: '', paragraph: '' };

  private uncategorizedPostsEffect = effect(() => {
    const allServices = this.wpService.fetchPostsUnderCategory(this.wpService.uncategorizedPosts(), 'category-services');
    const servicesIntroRaw = allServices.find((service: any) => service.slug === 'services-intro');
    const currentServicePosts = allServices
      .filter((service: any) => service.slug !== 'services-intro' && service.acf?.number >= 1 && service.acf?.number <= 8)
      .sort((first: any, second: any) => Date.parse(second.date) - Date.parse(first.date))
      .filter((service: any, index: number, services: any[]) =>
        services.findIndex(candidate => candidate.acf?.number === service.acf?.number) === index
      );

    this.serviceCards = currentServicePosts.map((service: any) => ({
      icon: service.acf?.fa_icon ?? '',
      title: service.title.rendered,
      description: this.getCardDescription(service.content.rendered),
      number: service.acf?.number,
      image: service.featured_media_src_url ?? '',
      slug: service.slug,
      detailPostId: typeof service.acf?.detail_post === 'number' ? service.acf.detail_post : service.acf?.detail_post?.id
    }));

    const introContent = servicesIntroRaw?.content?.rendered ?? '';
    this.servicesIntro.title = this.helperService.getParagraphText(introContent, 0) || servicesIntroRaw?.title?.rendered || '';
    this.servicesIntro.paragraph = this.helperService.getParagraphText(introContent, 1) || '';
    this.serviceCards = this.serviceCards.filter(card => card.description);
    this.helperService.log(this.serviceCards, 'Our Services Cards:', 'cyan', '#2196F3', '#fff');
  });

  private getCardDescription(html: string): string {
    const paragraphs = html.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) ?? [];

    if (paragraphs.length < 2) {
      return paragraphs[0] ?? html;
    }

    const secondParagraph = this.helperService.getParagraphText(html, 1);
    const words = secondParagraph.split(/\s+/).filter(Boolean).slice(0, 8);
    const openingTag = paragraphs[1].match(/^<p\b[^>]*>/i)?.[0] ?? '<p>';
    const truncatedSecondParagraph = words.length
      ? `${openingTag}${words.join(' ')}...</p>`
      : paragraphs[1];

    return `${paragraphs[0]}${truncatedSecondParagraph}`;
  }

}
