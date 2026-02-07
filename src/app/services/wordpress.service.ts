import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, concatMap, filter, from, map, Observable, throwError, toArray } from 'rxjs';
import { WPMedia, WPPost } from '../interfaces/wordpress';
import { WebsiteContent } from '../interfaces/website-content';

// import { AlertService } from '../alert/alert.service';

@Injectable({ providedIn: 'root' })
export class WordpressService {
  private http = inject(HttpClient);

  // websiteContent: WebsiteContent = new WebsiteContent();

  private baseUrl = 'https://devsense.co.za/wp/wp-json/wp/v2';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);


  constructor(  // private alertService: AlertService
  ) { }

  // private handleError(error: HttpErrorResponse, operation: string = 'operation') {
  //   this.alertService.showError(`Failed to ${operation}`, error);
  //   return throwError(() => error);
  // }

  // getCategories(): Observable<any[]> {
  //   return this.http.get<any[]>(this.baseUrl);
  // }

  // getCategoryById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/${id}`);
  // }


  getPostsByCategoryId(categoryId: number): Observable<WPPost[] | undefined> {


    const hyphenToCamel = (str: string): string => {
      return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    };

    const postsUrl = `${this.baseUrl}/posts?categories=${categoryId}`;
    return this.http.get<WPPost[]>(postsUrl).pipe(
    );
  }

  getAllPosts(): Observable<WPPost[]> {
    const postsUrl = `${this.baseUrl}/posts`;
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

  populateWebsiteContentFromPosts(posts: WPPost[]): WebsiteContent | undefined {
    if (!posts?.length) {
      return undefined;
    }

    const camelToHyphen = (str: string): string => {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    };

    // Define all WebsiteContent keys and their hyphenated versions
    const contentKeys = ['aboutUsOne', 'aboutUsTwo', 'servicesOverview'];
    const expertiseKeys = ['webApplicationDevelopment', 'mobileApplicationDevelopment', 'applicationAndEmailHosting', 'databaseArchitectureAndManagement'];

    // Create a mapping of hyphenated keys to actual keys
    const keyMapping: { [key: string]: string } = {};

    contentKeys.forEach(key => {
      keyMapping[camelToHyphen(key)] = key;
    });

    expertiseKeys.forEach(key => {
      keyMapping[camelToHyphen(key)] = key;
    });

    // Initialize the websiteContent object
    const result: any = {
      websiteContentExpertise: {}
    };

    // Iterate through posts and match slugs to keys
    posts.forEach((post: WPPost) => {
      if (post.slug) {
        const hyphenSlug = post.slug.toLowerCase();

        // Check if this slug matches any content key
        if (keyMapping[hyphenSlug]) {
          const originalKey = keyMapping[hyphenSlug];

          // Check if it's an expertise key or main key
          if (expertiseKeys.includes(originalKey)) {
            result.websiteContentExpertise[originalKey] = post;
          } else {
            result[originalKey] = post;
          }

          console.log(`✓ Matched post slug "${hyphenSlug}" to key "${originalKey}"`);
        }
      }
    });

    return result as WebsiteContent;
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
}
