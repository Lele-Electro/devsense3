import { Component, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section-contact1',
    templateUrl: './section-contact1.component.html',
    styleUrls: ['./section-contact1.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class SectionContact1Component implements OnInit {

  readonly data = input<any>(); 
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
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

    // Here you can send the form data to your backend API
    // Example using HttpClient (you'll need to inject it and create a service):
    // this.contactService.sendMessage(this.contactForm.value).subscribe({
    //   next: (response) => {
    //     this.submitSuccess = true;
    //     this.contactForm.reset();
    //   },
    //   error: (error) => {
    //     this.submitError = true;
    //   },
    //   complete: () => {
    //     this.isSubmitting = false;
    //   }
    // });

    // For now, simulate a successful submission
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.submitSuccess = true;
      this.isSubmitting = false;
      this.contactForm.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1000);
  }

  // Helper method to check if a field has an error
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }

}
