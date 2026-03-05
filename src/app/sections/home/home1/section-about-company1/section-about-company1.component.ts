import { Component, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-section-about-company1',
  templateUrl: './section-about-company1.component.html',
  styleUrls: ['./section-about-company1.component.scss'],
  imports: [RouterLink]
})
export class SectionAboutCompany1Component {

  private helperService = inject(HelperService);
  public wpService = inject(WordpressService);

  readonly data = input<any>();
  yearsExperience = 0;
  aboutUs: {
    image: string;
    title: string;
    description: string;
    experience: string;
    description2: string;
    established: string;
  } = {
      image: '',
      title: '',
      description: '',
      experience: '',
      description2: '',
      established: ''
    };

  constructor() { }

  private uncategorizedPostsEffect = effect(() => {
    const allAboutPosts = this.wpService.fetchPostsUnderCategory(this.wpService.uncategorizedPosts(), 'category-about');
    const aboutPost: any = allAboutPosts?.[0];
    const currentYear = new Date().getFullYear();

    if (!aboutPost) {
      const establishedYear = Number(this.data()?.established ?? 0);
      this.yearsExperience = establishedYear > 0 ? currentYear - establishedYear : Number(this.data()?.experience ?? 0);
      this.aboutUs = {
        image: this.data()?.image ?? '',
        title: this.data()?.title ?? '',
        description: this.data()?.description ?? '',
        experience: String(this.yearsExperience || this.data()?.experience || ''),
        description2: this.data()?.description2 ?? '',
        established: String(establishedYear || this.data()?.established || '')
      };
      return;
    }

    const renderedContent = aboutPost.content?.rendered ?? '';
    const establishedYear = Number(aboutPost.acf?.number ?? aboutPost.number ?? this.data()?.established ?? 0);
    this.yearsExperience = establishedYear > 0 ? currentYear - establishedYear : Number(this.data()?.experience ?? 0);
    this.aboutUs = {
      image: aboutPost.featured_media_src_url ?? this.data()?.image ?? '',
      title: aboutPost.title?.rendered ?? this.data()?.title ?? '',
      description: this.helperService.getParagraphText(renderedContent, 0) || this.data()?.description || '',
      experience: String(this.yearsExperience || this.data()?.experience || ''),
      description2: this.helperService.getParagraphText(renderedContent, 1) || this.data()?.description2 || '',
      established: String(establishedYear || this.data()?.established || '')
    };
  });

}
