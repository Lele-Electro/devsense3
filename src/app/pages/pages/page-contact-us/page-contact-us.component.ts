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

    // CARTO basemaps now need an API key, so use OpenStreetMap's keyless tiles. Their usage
    // policy needs the attribution below and a Referer header, so keep the referrer explicit.
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      referrerPolicy: 'strict-origin-when-cross-origin',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // The premises marker is the loader's centre piece in colour, on a dark pin.
    const markerIcon = leaflet.divIcon({
      className: 'premises-marker',
      html: '<span class="premises-marker__pulse"></span>'
        + '<span class="premises-marker__pin"><img src="assets/images/loader/mark-colour.svg" alt="" width="17" height="30"></span>',
      iconSize: [46, 56],
      iconAnchor: [23, 56],
      popupAnchor: [0, -52]
    });

    leaflet.marker([officeCoordinates[1], officeCoordinates[0]], {
      icon: markerIcon,
      title: 'Devsense premises, Libra Office Park',
      alt: 'Devsense premises'
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
