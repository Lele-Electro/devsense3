import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import type { Request } from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { CommonEngine } from '@angular/ssr/node';
import bootstrap from './src/main.server.js';
import { createTransport } from 'nodemailer';
import {
  buildAcknowledgementEmail,
  buildOrgEmail,
  type ContactPayload,
} from './server/email-templates.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// When built, server.js runs from dist/devsense/server/
// Browser files are in dist/devsense/browser/
const browserDistFolder = resolve(__dirname, '../browser');
// SSR template is in dist/devsense/browser/server/
const indexHtml = resolve(__dirname, '../browser/server/index.server.html');

// Create CommonEngine instance for SSR
const commonEngine = new CommonEngine();

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Let Angular handle CSP
    crossOriginEmbedderPolicy: false,
  }),
);

// Request parsing with size limits
app.use(express.json({ limit: '50kb' }));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window per IP
  message: { ok: false, error: 'Too many contact requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Serve static files with long cache for production
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    etag: false,
    index: false, // Don't serve index.html for directories
  }),
);

app.post('/api/contact', contactLimiter, async (req, res) => {
  const payload = req.body as Partial<ContactPayload>;

  // Honeypot check (bot protection)
  if (payload.website) {
    console.warn('Honeypot triggered:', req.ip);
    return res.json({ ok: true }); // Fake success to fool bots
  }

  // Strip HTML tags and excessive whitespace
  const sanitize = (str: string) =>
    str
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const username = sanitize(payload.username || '');
  const email = (payload.email || '').trim().toLowerCase();
  const phone = sanitize(payload.phone || '');
  const message = sanitize(payload.message || '');

  if (!username || username.length < 2 || username.length > 100) {
    return res.status(400).json({ ok: false, error: 'Name must be 2-100 characters.' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Valid email is required.' });
  }
  if (!phone || !isValidPhoneNumber(phone)) {
    return res
      .status(400)
      .json({ ok: false, error: 'Valid phone number with country code is required.' });
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return res.status(400).json({ ok: false, error: 'Message must be 10-5000 characters.' });
  }

  const cleanPayload: ContactPayload = {
    username,
    email,
    phone,
    message,
  };

  const brandName = process.env['BRAND_NAME'] || 'DevSense';
  const websiteUrl = process.env['WEBSITE_URL'] || 'https://example.com';
  const contactTo = process.env['CONTACT_TO'] || 'contact@example.com';
  const fromAddress = process.env['SMTP_FROM'] || `"${brandName}" <no-reply@example.com>`;

  const ackEmail = buildAcknowledgementEmail(cleanPayload, brandName, websiteUrl);
  const orgEmail = buildOrgEmail(
    cleanPayload,
    brandName,
    `${req.protocol}://${req.headers.host}${req.originalUrl}`,
    {
      ip: (req as Request).ip,
      userAgent: req.headers['user-agent'],
    },
  );

  const hasSmtp = Boolean(process.env['SMTP_HOST']);
  const transporter = hasSmtp
    ? createTransport({
        host: process.env['SMTP_HOST'],
        port: Number(process.env['SMTP_PORT'] || 587),
        secure: process.env['SMTP_SECURE'] === 'true',
        auth: process.env['SMTP_USER']
          ? {
              user: process.env['SMTP_USER'],
              pass: process.env['SMTP_PASS'] || '',
            }
          : undefined,
      })
    : createTransport({ jsonTransport: true });

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: contactTo,
      replyTo: email,
      subject: orgEmail.subject,
      html: orgEmail.html,
      text: orgEmail.text,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: ackEmail.subject,
      html: ackEmail.html,
      text: ackEmail.text,
    });

    if (!hasSmtp) {
      console.warn('SMTP_HOST not set. Emails were rendered but not sent.');
    }

    console.log('Contact form submitted:', {
      email,
      ip: req.ip,
      timestamp: new Date().toISOString(),
    });
    return res.json({ ok: true });
  } catch (error) {
    console.error('Contact email failed:', error, { ip: req.ip });
    return res.status(500).json({ ok: false, error: 'Email delivery failed.' });
  }
});

// All regular routes use the Angular engine (Express 5.x requires regex, not '*')
app.get(/.*/, (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: 'REQUEST', useValue: req }],
    })
    .then((html: string) => res.send(html))
    .catch((err: unknown) => next(err));
});

// Start server
const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`SSR Server running at http://localhost:${port}`);
});
