import { Component, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ContactService, ContactResponse } from '@devsense/services';

@Component({
    selector: 'app-section-contact1',
    templateUrl: './section-contact1.component.html',
    styleUrls: ['./section-contact1.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgxIntlTelInputModule]
})
export class SectionContact1Component implements OnInit {

  readonly data = input<any>();
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

}
