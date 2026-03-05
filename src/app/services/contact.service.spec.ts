import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactService, ContactFormData, ContactResponse } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should submit contact form with string phone number', () => {
    const mockFormData: ContactFormData = {
      username: 'John Doe',
      email: 'john@example.com',
      phone: '+27123456789',
      message: 'Test message'
    };

    const mockResponse: ContactResponse = {
      ok: true
    };

    service.submitContactForm(mockFormData).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/api/contact');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockFormData);
    req.flush(mockResponse);
  });

  it('should normalize phone number object to E.164 format', () => {
    const mockFormData: ContactFormData = {
      username: 'John Doe',
      email: 'john@example.com',
      phone: { e164Number: '+27123456789' },
      message: 'Test message'
    };

    const expectedPayload = {
      username: 'John Doe',
      email: 'john@example.com',
      phone: '+27123456789',
      message: 'Test message'
    };

    service.submitContactForm(mockFormData).subscribe();

    const req = httpMock.expectOne('/api/contact');
    expect(req.request.body).toEqual(expectedPayload);
    req.flush({ ok: true });
  });

  it('should handle error response', () => {
    const mockFormData: ContactFormData = {
      username: 'John Doe',
      email: 'john@example.com',
      phone: '+27123456789',
      message: 'Test message'
    };

    const mockErrorResponse: ContactResponse = {
      ok: false,
      error: 'Email delivery failed.'
    };

    service.submitContactForm(mockFormData).subscribe(response => {
      expect(response.ok).toBe(false);
      expect(response.error).toBe('Email delivery failed.');
    });

    const req = httpMock.expectOne('/api/contact');
    req.flush(mockErrorResponse);
  });

  it('should include honeypot field in payload', () => {
    const mockFormData: ContactFormData = {
      username: 'John Doe',
      email: 'john@example.com',
      phone: '+27123456789',
      message: 'Test message',
      website: ''
    };

    service.submitContactForm(mockFormData).subscribe();

    const req = httpMock.expectOne('/api/contact');
    expect(req.request.body.website).toBe('');
    req.flush({ ok: true });
  });
});
