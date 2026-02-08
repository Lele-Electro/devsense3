import { AfterViewInit, Component, OnInit, effect, inject, input } from '@angular/core';
import { TestimonialQuote } from 'src/app/interfaces/website-content';
import { WPPost } from 'src/app/interfaces/wordpress';
import { HelperService } from 'src/app/services/helper.service';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-section-testimonials2',
  templateUrl: './section-testimonials2.component.html',
  styleUrls: ['./section-testimonials2.component.scss'],
  standalone: true
})
export class SectionTestimonials2Component implements AfterViewInit {
  wpService = inject(WordpressService);
  helperService = inject(HelperService);

  readonly data = input<any>();
  testimonials: TestimonialQuote[] = []

  constructor() { }

  ngAfterViewInit(): void {





  }
  private uncategorizedPostsEffect = effect(() => {
    const wpPosts = this.wpService.uncategorizedPosts();
    // alert('change');

    const data = wpPosts?.filter(
      (post: any) => post.class_list?.includes('category-testimonials')
    ) ?? [];
    this.testimonials = data.map((post: any) => ({
      name: post.title.rendered,
      quote: post.content.rendered,
      image: post.imageUrl ?? 'assets/images/testimonials/anonymous-user.png',
      designation: null as any
    }));
    this.helperService.log(this.testimonials, 'Final Testimonial Quotes:');
  });


}

