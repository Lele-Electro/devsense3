import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { catchError, concatMap, filter, from, map, Observable, throwError, toArray } from 'rxjs';
import { WPMedia, WPPost } from '../interfaces/wordpress';
import { PortfolioProjects, WebsiteContent } from '../interfaces/website-content';

// import { AlertService } from '../alert/alert.service';

@Injectable({ providedIn: 'root' })
export class WordpressService {
  websiteContent: WritableSignal<Record<string, any>> = signal({});
  isLoading: WritableSignal<boolean> = signal(true);
  private http = inject(HttpClient);
  private baseUrl = 'https://devsense.co.za/wp/wp-json/wp/v2';
  public uncategorizedPosts: WritableSignal<WPPost[]> = signal<WPPost[]>([]);
  public portfolioProjects: WritableSignal<PortfolioProjects> = signal<PortfolioProjects>({ categories: [], items: [] });

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);


  constructor(  // private alertService: AlertService
  ) { }
  getPostsByCategoryId(categoryId: number): Observable<WPPost[] | undefined> {


    const hyphenToCamel = (str: string): string => {
      return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    };

    const postsUrl = `${this.baseUrl}/posts?categories=${categoryId}`;
    return this.http.get<WPPost[]>(postsUrl).pipe(
    );
  }

  getAllPosts(): Observable<WPPost[]> {
    const postsUrl = `${this.baseUrl}/posts?per_page=100`; // Adjust per_page as needed (max 100 for WordPress REST API)
    return this.http.get<WPPost[]>(postsUrl).pipe(

    );
  }

  getAllSubcategoriesByCategoryId(categoryId: number): Observable<any[]> {
    return this.getSubcategoriesByCategoryId(categoryId).pipe(
      concatMap(subcategories =>
        subcategories.length ? from(subcategories).pipe(
          concatMap(sub => this.getSubcategoriesByCategoryId(sub.id)),
          toArray(),
          map(nested => [...subcategories, ...nested.flat()])
        ) : from([subcategories])
      )
    );
  }

  getPostsByParentId(parentId: number): Observable<WPPost[]> {
    const postsUrl = `${this.baseUrl}/posts?parent=${parentId}`;
    return this.http.get<WPPost[]>(postsUrl).pipe(
      // catchError(error => this.handleError(error, `fetch posts for parent ${parentId}`))
    );
  }

  getSubcategoriesByCategoryId(categoryId: number): Observable<any[]> {
    const subcategoriesUrl = `${this.baseUrl}/categories?parent=${categoryId}`;
    return this.http.get<any[]>(subcategoriesUrl).pipe(
      // catchError(error => this.handleError(error, `fetch subcategories for category ${categoryId}`))
    );
  }

  returnFeatureImage(categoryId: number): Observable<WPMedia> {
    const postsUrl = `${this.baseUrl}/media/${categoryId}`;
    return this.http.get<WPMedia>(postsUrl).pipe(
      // catchError(error => this.handleError(error, `fetch media ${categoryId}`))
    );
  }

  getMedia(mediaId: number): Observable<string | undefined> {
    const mediaUrl = `${this.baseUrl}/media/${mediaId}`;
    return this.http.get<WPMedia>(mediaUrl).pipe(
      map((media: WPMedia) => media?.source_url)
    );
  }

  makeSequentialCalls(posts: WPPost[]): Observable<(WPPost & { media_source_url?: string })[]> {
    if (!posts?.length) {
      // this.alertService.showError('No posts provided for processing');
      return from([]);
    }

    return from(posts).pipe(
      filter((post: WPPost) => {
        if (!post.featured_media) {
          // this.alertService.showError(`Post ${post.id} has no featured media`);
          return false;
        }
        return true;
      }),
      concatMap((post: WPPost) =>
        this.returnFeatureImage(post.featured_media).pipe(
          map((media: WPMedia) => ({ ...post, media_source_url: media?.source_url })),
          catchError((error: any) => {
            // this.alertService.showError(`Failed to fetch media for post ${post.id}`, error);
            return from([post]); // Return post without media rather than failing entire sequence
          })
        )
      ),
      toArray()
    );
  }

  fetchPostsUnderCategory(posts: WPPost[], categorySlug: string): WPPost[] {
    return posts?.filter(
      (post: any) => post.class_list?.includes(categorySlug)
    ) ?? [];
  }


}
