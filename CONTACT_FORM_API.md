# Contact Form API Documentation

## Endpoint

```
POST /api/contact
```

## Rate Limiting
- **Limit**: 5 requests per 15 minutes per IP address
- **Response on limit exceeded**: 
  ```json
  {
    "ok": false,
    "error": "Too many contact requests. Please try again later."
  }
  ```

## Request Body

```typescript
{
  username: string;    // 2-100 characters
  email: string;       // Valid email format
  phone: string;       // E.164 format with country code (e.g., "+27123456789")
  message: string;     // 10-5000 characters
  website?: string;    // Honeypot field - should be empty
}
```

## Validation Rules

| Field | Required | Min Length | Max Length | Format |
|-------|----------|------------|------------|--------|
| username | Yes | 2 | 100 | Any text (HTML stripped) |
| email | Yes | - | - | Valid email regex |
| phone | Yes | - | - | International format (validated by libphonenumber-js) |
| message | Yes | 10 | 5000 | Any text (HTML stripped) |
| website | No | - | - | Should remain empty (bot protection) |

## Success Response

```json
{
  "ok": true
}
```

**Status Code:** `200 OK`

## Error Responses

### Validation Error
```json
{
  "ok": false,
  "error": "Name must be 2-100 characters."
}
```
**Status Code:** `400 Bad Request`

### Server Error
```json
{
  "ok": false,
  "error": "Email delivery failed."
}
```
**Status Code:** `500 Internal Server Error`

### Rate Limit Exceeded
```json
{
  "ok": false,
  "error": "Too many contact requests. Please try again later."
}
```
**Status Code:** `429 Too Many Requests`

## Error Messages

- `"Name must be 2-100 characters."`
- `"Valid email is required."`
- `"Valid phone number with country code is required."`
- `"Message must be 10-5000 characters."`
- `"Email delivery failed."`
- `"Too many contact requests. Please try again later."`

## Security Features

1. **Input Sanitization**: HTML tags stripped, whitespace normalized
2. **HTML Escaping**: All user input escaped before email rendering
3. **Rate Limiting**: Protection against spam/abuse
4. **Honeypot**: Bot detection via hidden field
5. **Request Size Limit**: 50KB maximum payload
6. **Phone Validation**: International format verification
7. **Email Validation**: Regex pattern matching

## Email Notifications

### User Acknowledgement Email
- **To**: User's email address
- **Subject**: "Thanks for contacting {BRAND_NAME}"
- **Content**: Professional MJML template with submission confirmation
- **Format**: HTML + plain text fallback

### Organization Notification Email
- **To**: Configured admin email (CONTACT_TO)
- **Subject**: "New contact request from {username}"
- **Content**: Complete form submission with metadata
- **Metadata**: IP address, User Agent, timestamp, source URL
- **Reply-To**: User's email for easy response

## Example Usage

### JavaScript/Fetch
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'John Doe',
    email: 'john@example.com',
    phone: '+27123456789',
    message: 'I would like to discuss a project...',
    website: '' // Honeypot - leave empty
  })
});

const result = await response.json();
if (result.ok) {
  console.log('Message sent successfully!');
} else {
  console.error('Error:', result.error);
}
```

### Angular Service
```typescript
import { ContactService } from '@devsense/services';

constructor(private contactService: ContactService) {}

submitForm() {
  const formData = {
    username: 'John Doe',
    email: 'john@example.com',
    phone: '+27123456789',
    message: 'I would like to discuss a project...',
    website: ''
  };

  this.contactService.submitContactForm(formData).subscribe({
    next: (response) => {
      if (response.ok) {
        console.log('Success!');
      }
    },
    error: (error) => {
      console.error('Error:', error);
    }
  });
}
```

## Environment Configuration

Required environment variables for production:

```bash
# SMTP Configuration (required for email delivery)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password

# Email Addresses
SMTP_FROM="DevSense" <no-reply@devsense.co.za>
CONTACT_TO=contact@devsense.co.za

# Branding
BRAND_NAME=DevSense
WEBSITE_URL=https://devsense.co.za

# Server
PORT=4000
```

## Monitoring & Logging

### Logged Events
- **Successful submissions**: Email, IP, timestamp
- **Honeypot triggers**: IP address (bot detection)
- **Email failures**: Error details with IP context
- **SMTP warnings**: When SMTP not configured (dev mode)

### Log Levels
- `console.log`: Successful submissions
- `console.warn`: Honeypot triggers, missing SMTP config
- `console.error`: Email delivery failures

## Testing

### Development Mode (No SMTP)
When `SMTP_HOST` is not set:
- API still accepts requests
- Emails are rendered but not sent
- Console warning displayed
- Returns success response to client

### Production Mode
Requires all SMTP environment variables:
- Emails sent via configured SMTP server
- Delivery failures return 500 error
- Both acknowledgement and notification emails sent

## CORS Configuration

Currently only accepts same-origin requests. To enable cross-origin:

```typescript
import cors from 'cors';

app.use(cors({
  origin: 'https://yourdomain.com',
  methods: ['POST'],
  credentials: true
}));
```

## Future Enhancements

Potential improvements for consideration:
1. Database logging for submission history
2. Email queue for high-volume scenarios
3. Attachment support (resumes, portfolios)
4. Custom email templates per contact type
5. Webhook notifications to Slack/Discord
6. CRM integration (Salesforce, HubSpot)
7. Analytics tracking (Google Analytics events)
8. Captcha integration (reCAPTCHA v3)
