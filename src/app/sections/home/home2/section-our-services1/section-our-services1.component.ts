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
    this.serviceCards = allServices.map((service: any) => ({
      icon: service.acf?.fa_icon ?? '',
      title: service.title.rendered,
      description: service.content.rendered,
      number: service.acf?.number,
      image: service.featured_media_src_url ?? ''
    }));

    const servicesIntroRaw = this.serviceCards.find(service => service.number === 7);
    this.servicesIntro.title = this.helperService.getParagraphText(servicesIntroRaw!?.description, 0) || servicesIntroRaw?.title || '';
    this.servicesIntro.paragraph = this.helperService.getParagraphText(servicesIntroRaw!?.description, 1) || '';
    this.serviceCards = this.serviceCards.filter(card => card.number !== 7 && card.description);
    this.helperService.log(this.serviceCards, 'Our Services Cards:', 'cyan', '#2196F3', '#fff');
  });

}
