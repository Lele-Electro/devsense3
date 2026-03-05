import { Component, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { WordpressService } from 'src/app/services/wordpress.service';
import { serviceCard } from 'src/app/interfaces/website-content';
import { SortByPipe } from 'src/app/pipes/sort-by.pipe';
@Component({
  selector: 'app-section-skills1',
  templateUrl: './section-skills1.component.html',
  styleUrls: ['./section-skills1.component.scss'],
  imports: [RouterLink, SortByPipe]
})
export class SectionSkills1Component {
  private helperService = inject(HelperService);
  public wpService = inject(WordpressService);
  readonly data = input<any>();
  readonly home = input<any>();
  serviceCards: serviceCard[] = [];

  constructor() { }

  private uncategorizedPostsEffect = effect(() => {
    const allServices = this.wpService.fetchPostsUnderCategory(this.wpService.uncategorizedPosts(), 'category-services');
    this.serviceCards = allServices.map((service: any) => ({
      icon: service.acf?.fa_icon ?? '',
      title: service.title.rendered,
      description: service.content.rendered,
      number: service.acf?.number
    }));
    this.serviceCards = this.serviceCards.filter(card => card.number !== 7);
    this.helperService.log(this.serviceCards, 'Final Service Cards:', 'hotpink', '#764ba2', '#fff');
  });

}
