import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Footer1Component, Header2Component, BannerComponent } from '@devsense/sections';
import { ContactService, ContactResponse } from '@devsense/services';

@Component({
    selector: 'app-page-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, NgxIntlTelInputModule, Header2Component, BannerComponent, Footer1Component]
})
export class PageContactUsComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // Country selector config
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.SouthAfrica, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
      website: [''] // Honeypot: should remain empty
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const payload = this.contactForm.getRawValue();

    this.contactService.submitContactForm(payload)
      .pipe(finalize(() => {
        this.isSubmitting = false;
      }))
      .subscribe({
        next: (response: ContactResponse) => {
          if (response.ok) {
            this.submitSuccess = true;
            this.contactForm.reset();
            setTimeout(() => {
              this.submitSuccess = false;
            }, 5000);
          } else {
            this.submitError = true;
          }
        },
        error: () => {
          this.submitError = true;
        }
      });
  }

  // Helper method to check if a field has an error
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Lets get in touch",
    currentPage: "Contact us",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  contact = {
    phone: "(123) 456-78910",
    email: "7xthemedemo@gmail.com",
    address: "09, Martin Street B190 Polo Alto, San Francisco"
  }
}
