import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, concatMap, filter, from, map, Observable, throwError, toArray } from 'rxjs';
import { WPMedia, WPPost } from '../interfaces/wordpress';

// import { AlertService } from '../alert/alert.service';

@Injectable({ providedIn: 'root' })
export class WordpressService {
  private http = inject(HttpClient);

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
    const postsUrl = `${this.baseUrl}/posts?categories=${categoryId}`;
    return this.http.get<WPPost[]>(postsUrl).pipe(
      // catchError(error => this.handleError(error, `fetch posts for category ${categoryId}`))
    );
  }

  returnFeatureImage(categoryId: number): Observable<WPMedia> {
    const postsUrl = `${this.baseUrl}/media/${categoryId}`;
    return this.http.get<WPMedia>(postsUrl).pipe(
      // catchError(error => this.handleError(error, `fetch media ${categoryId}`))
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
}
