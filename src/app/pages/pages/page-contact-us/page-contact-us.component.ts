import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import type { Map as LeafletMap } from 'leaflet';
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
export class PageContactUsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('contactMap') private contactMap?: ElementRef<HTMLDivElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private map?: LeafletMap;

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

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || !this.contactMap) {
      return;
    }

    const leafletModule = await import('leaflet');
    const leaflet = leafletModule.default;
    const officeCoordinates: [number, number] = [28.362697, -25.7688758];

    this.map = leaflet.map(this.contactMap.nativeElement, {
      center: [officeCoordinates[1], officeCoordinates[0]],
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: false
    });

    leaflet.control.zoom({ position: 'topright' }).addTo(this.map);

    leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
      subdomains: 'abcd',
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(this.map);

    const markerIcon = leaflet.divIcon({
      className: 'contact-map-marker',
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -38]
    });

    leaflet.marker([officeCoordinates[1], officeCoordinates[0]], {
      icon: markerIcon,
      title: 'Libra Office Park'
    })
      .addTo(this.map)
      .bindPopup('<strong>Libra Office Park</strong><br>1 Von Backstrom Blvd<br>Silver Lakes Golf Estate, 0081', {
        closeButton: false
      });
  }

  ngOnDestroy(): void {
    this.map?.remove();
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
    background: "assets/images/devsense-silver-lakes-office-park-final-logo.png",
    title: "Lets get in touch",
    currentPage: "Contact us",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  contact = {
    phone: "+27 81 716 0246",
    phoneHref: "tel:+27817160246",
    email: "info@devsense.co.za",
    emailHref: "mailto:info@devsense.co.za",
    address: "Block D, Floor 2, Silver Lakes Office Park, Silver Lakes, Pretoria, 0081, Gauteng, South Africa"
  }
}
