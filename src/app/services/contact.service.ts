import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  username: string;
  email: string;
  phone: string | { e164Number?: string };
  message: string;
  website?: string; // Honeypot field
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly API_URL = '/api/contact';

  constructor(private http: HttpClient) { }

  /**
   * Submit contact form data to the backend
   * @param formData Contact form data
   * @returns Observable of the contact response
   */
  submitContactForm(formData: ContactFormData): Observable<ContactResponse> {
    // Normalize phone number if it's an object from ngx-intl-tel-input
    const payload = { ...formData };
    if (payload.phone && typeof payload.phone === 'object' && payload.phone.e164Number) {
      payload.phone = payload.phone.e164Number;
    }

    return this.http.post<ContactResponse>(this.API_URL, payload);
  }
}
