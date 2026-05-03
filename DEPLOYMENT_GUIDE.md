# Contact Form Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a `.env` file in the project root (use `.env.example` as template):

```bash
# Copy the example file
cp .env.example .env

# Edit with your production values
nano .env
```

**Required Variables:**

```bash
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com          # Or your SMTP provider
SMTP_PORT=587                     # Use 465 for SSL, 587 for TLS
SMTP_SECURE=false                 # Set to true if using port 465
SMTP_USER=your-email@gmail.com    # SMTP authentication username
SMTP_PASS=your-app-password       # SMTP authentication password

# Email Configuration
SMTP_FROM="DevSense" <no-reply@devsense.co.za>  # Sender email
CONTACT_TO=contact@devsense.co.za               # Recipient email

# Branding
BRAND_NAME=DevSense
WEBSITE_URL=https://devsense.co.za

# Server Configuration
PORT=4000
NODE_ENV=production
```

### 2. SMTP Provider Setup

#### Gmail Configuration
1. Enable 2-Factor Authentication on your Google account
2. Generate App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Copy the generated 16-character password
   - Use this password in `SMTP_PASS`

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop  # App password (remove spaces)
```

#### SendGrid Configuration
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  # Your SendGrid API key
```

#### AWS SES Configuration
```bash
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-ses-smtp-username
SMTP_PASS=your-ses-smtp-password
```

### 3. Email Template Branding

Update stock images in [server/email-templates.ts](server/email-templates.ts):

```typescript
// Line 50: Replace STOCK_IMAGE_URL
const STOCK_IMAGE_URL = 'https://your-cdn.com/devsense-logo.jpg';

// Or use different images per template:
function buildAcknowledgementEmail(data: EmailData) {
  const logoUrl = 'https://your-cdn.com/logo-light.jpg';
  // ...
}

function buildOrgEmail(data: EmailData) {
  const logoUrl = 'https://your-cdn.com/logo-dark.jpg';
  // ...
}
```

**Recommended Image Specs:**
- Format: JPG or PNG
- Size: 600px wide × 300px tall (2:1 ratio)
- File size: < 100KB for email performance
- Host: CDN preferred (Cloudinary, AWS S3, Cloudflare)

### 4. Build for Production

```bash
# Install dependencies
npm ci

# Build SSR application
npm run build:prod:ssr

# Verify build output
ls -la dist/devsense3/server
ls -la dist/devsense3/browser
```

### 5. Test Email Functionality

```bash
# Start production server
npm run serve:ssr:devsense3

# In another terminal, test the endpoint
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "username": "Test User",
    "email": "your-test-email@example.com",
    "phone": "+27123456789",
    "message": "This is a test message from the deployment checklist.",
    "website": ""
  }'
```

**Expected Response:**
```json
{"ok":true}
```

**Verify:**
1. Check your test email inbox for acknowledgement
2. Check `CONTACT_TO` inbox for notification email
3. Check server logs for any errors

## Deployment Options

### Option 1: Traditional VPS (DigitalOcean, Linode, AWS EC2)

#### Install Node.js
```bash
# Install Node.js 18+ (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### Deploy Application
```bash
# Clone repository
git clone https://github.com/your-org/devsense3.git
cd devsense3

# Install dependencies
npm ci --only=production

# Copy environment file
cp .env.example .env
nano .env  # Configure SMTP settings

# Build application
npm run build:prod:ssr

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start dist/devsense3/server/server.mjs --name devsense3

# Enable auto-restart on reboot
pm2 startup
pm2 save

# Monitor application
pm2 logs devsense3
pm2 status
```

#### Configure Nginx Reverse Proxy
```nginx
server {
    listen 80;
    server_name devsense.co.za www.devsense.co.za;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Enable HTTPS with Let's Encrypt
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d devsense.co.za -d www.devsense.co.za
```

### Option 2: Docker Deployment

#### Build Docker Image
```bash
# Build image
docker build -t devsense3:latest .

# Run container
docker run -d \
  -p 4000:4000 \
  --name devsense3 \
  --env-file .env \
  --restart unless-stopped \
  devsense3:latest
```

#### Docker Compose
```yaml
version: '3.8'
services:
  devsense3:
    image: devsense3:latest
    ports:
      - "4000:4000"
    env_file:
      - .env
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:4000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Option 3: Platform as a Service

#### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create devsense3

# Set environment variables
heroku config:set SMTP_HOST=smtp.gmail.com
heroku config:set SMTP_PORT=587
heroku config:set SMTP_USER=your-email@gmail.com
heroku config:set SMTP_PASS=your-app-password
heroku config:set SMTP_FROM="DevSense <no-reply@devsense.co.za>"
heroku config:set CONTACT_TO=contact@devsense.co.za
heroku config:set BRAND_NAME=DevSense
heroku config:set WEBSITE_URL=https://devsense.co.za
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# Open application
heroku open
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
# https://vercel.com/your-org/devsense3/settings/environment-variables
```

## Post-Deployment Verification

### 1. Health Check
```bash
# Test homepage
curl -I https://devsense.co.za

# Test contact API
curl -X POST https://devsense.co.za/api/contact \
  -H "Content-Type: application/json" \
  -d '{"username":"Test","email":"test@example.com","phone":"+27123456789","message":"Test message","website":""}'
```

### 2. Email Delivery Test
1. Visit https://devsense.co.za/contact
2. Fill out contact form with your email
3. Submit and verify:
   - ✅ Form shows success message
   - ✅ Acknowledgement email received
   - ✅ Notification email received at `CONTACT_TO`

### 3. Security Verification

```bash
# Test rate limiting
for i in {1..6}; do
  curl -X POST https://devsense.co.za/api/contact \
    -H "Content-Type: application/json" \
    -d '{"username":"Test","email":"test@example.com","phone":"+27123456789","message":"Rate limit test","website":""}'
  sleep 1
done
# Expected: 6th request should return rate limit error
```

### 4. Monitor Logs

```bash
# PM2 logs
pm2 logs devsense3 --lines 100

# Docker logs
docker logs -f devsense3

# Heroku logs
heroku logs --tail
```

## Monitoring & Maintenance

### Application Monitoring

#### PM2 Monitoring
```bash
# Real-time monitoring
pm2 monit

# Resource usage
pm2 list
```

#### Log Rotation
```bash
# Install PM2 log rotation
pm2 install pm2-logrotate

# Configure retention
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Email Delivery Monitoring

Set up alerts for:
- Failed email deliveries (check logs for "Email delivery failed")
- SMTP authentication errors
- Rate limit triggers (potential abuse)

### Performance Metrics

Monitor:
- Response time for `/api/contact` endpoint
- Email delivery time (SMTP latency)
- Server CPU and memory usage
- Rate limit trigger frequency

## Troubleshooting

### Issue: Emails Not Sending

**Check:**
1. Environment variables loaded: `pm2 env devsense3`
2. SMTP credentials valid: Test with SMTP client
3. Server logs: `pm2 logs devsense3 --err`
4. Firewall: Ensure port 587/465 is open outbound

**Solution:**
```bash
# Test SMTP connection
node -e "
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});
transport.verify().then(console.log).catch(console.error);
"
```

### Issue: Rate Limiting Too Strict

**Adjust in [server.ts](server.ts):**
```typescript
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // Increase time window
  max: 10,                    // Increase max requests
  // ...
});
```

### Issue: Phone Validation Rejecting Valid Numbers

**Check:**
1. Number includes country code: `+27123456789`
2. libphonenumber-js recognizes format
3. Test different country codes

**Debug:**
```typescript
import { parsePhoneNumberFromString } from 'libphonenumber-js';
const number = parsePhoneNumberFromString(phone);
console.log(number?.isValid(), number?.format('E.164'));
```

## Rollback Procedure

### PM2 Deployment
```bash
# Stop current version
pm2 stop devsense3

# Checkout previous version
git checkout <previous-commit>

# Rebuild
npm ci
npm run build:prod:ssr

# Restart
pm2 restart devsense3
```

### Docker Deployment
```bash
# Stop current container
docker stop devsense3

# Run previous image
docker run -d --name devsense3 devsense3:previous-tag
```

## Security Best Practices

✅ **Never commit `.env` file** - Already in `.gitignore`  
✅ **Use HTTPS only** - Configure SSL/TLS  
✅ **Keep dependencies updated** - Run `npm audit fix` regularly  
✅ **Monitor logs** - Watch for abuse patterns  
✅ **Backup email templates** - Version control all changes  
✅ **Test SMTP credentials** - Validate before deployment  
✅ **Set up alerts** - Email delivery failures, rate limit triggers  

## Support & Documentation

- **API Documentation**: See [CONTACT_FORM_API.md](CONTACT_FORM_API.md)
- **Security Audit**: See [CONTACT_FORM_AUDIT.md](CONTACT_FORM_AUDIT.md)
- **Email Templates**: See [server/email-templates.ts](server/email-templates.ts)
- **Service Layer**: See [src/app/services/contact.service.ts](src/app/services/contact.service.ts)

## Deployment Checklist

Before going live:

- [ ] `.env` file configured with production SMTP settings
- [ ] Email templates updated with real branding images
- [ ] SMTP credentials tested and verified
- [ ] Production build completed successfully
- [ ] Contact form tested end-to-end
- [ ] Both emails received (acknowledgement + notification)
- [ ] Rate limiting tested and working
- [ ] HTTPS/SSL configured
- [ ] Monitoring and logging set up
- [ ] DNS records pointing to correct server
- [ ] Firewall rules configured
- [ ] Backup strategy in place
- [ ] Rollback procedure documented
