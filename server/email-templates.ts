import mjml from 'mjml';

type ContactPayload = {
  username: string;
  email: string;
  phone: string;
  message: string;
  website?: string; // Honeypot field
};

type EmailContent = {
  subject: string;
  html: string;
  text: string;
};

const STOCK_IMAGE_URL =
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80';

const LOGO_TEXT = 'DevSense';

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderMjml = (markup: string): string => {
  const { html, errors } = mjml(markup, { validationLevel: 'soft' });
  if (errors?.length) {
    console.warn('MJML validation warnings:', errors);
  }
  return html;
};

export const buildAcknowledgementEmail = (
  payload: ContactPayload,
  brandName: string,
  websiteUrl: string
): EmailContent => {
  const safeName = escapeHtml(payload.username);
  const safeMessage = escapeHtml(payload.message);

  const subject = `Thanks for contacting ${brandName}`;
  const html = renderMjml(`
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-text font-family="Helvetica, Arial, sans-serif" color="#243b53" />
          <mj-button background-color="#111827" color="#ffffff" font-family="Helvetica, Arial, sans-serif" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#f8fafc">
        <mj-section padding="24px 0">
          <mj-column>
            <mj-text font-size="20px" font-weight="700">${LOGO_TEXT}</mj-text>
          </mj-column>
        </mj-section>
        <mj-section background-color="#ffffff" padding="0">
          <mj-column>
            <mj-image src="${STOCK_IMAGE_URL}" alt="Workspace" padding="0" />
          </mj-column>
        </mj-section>
        <mj-section background-color="#ffffff" padding="24px">
          <mj-column>
            <mj-text font-size="22px" font-weight="700">Hi ${safeName},</mj-text>
            <mj-text font-size="16px" line-height="1.6">
              Thanks for reaching out to ${escapeHtml(brandName)}. We have received your message and our team will respond soon.
            </mj-text>
            <mj-divider border-color="#e2e8f0" />
            <mj-text font-size="14px" color="#52606d" line-height="1.6">
              Your message: “${safeMessage}”
            </mj-text>
            <mj-button href="${escapeHtml(websiteUrl)}" padding="16px 0">Visit our website</mj-button>
          </mj-column>
        </mj-section>
        <mj-section padding="16px">
          <mj-column>
            <mj-text font-size="12px" color="#9aa5b1">
              This is an automated acknowledgement. If you did not submit this form, please ignore this email.
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);

  const text = `Hi ${payload.username},\n\nThanks for reaching out to ${brandName}. We received your message and will respond soon.\n\nYour message:\n${payload.message}\n\nVisit our website: ${websiteUrl}`;

  return { subject, html, text };
};

export const buildOrgEmail = (
  payload: ContactPayload,
  brandName: string,
  sourceUrl: string,
  meta: { ip?: string; userAgent?: string }
): EmailContent => {
  const subject = `New contact request from ${payload.username}`;
  const html = renderMjml(`
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-text font-family="Helvetica, Arial, sans-serif" color="#243b53" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#f8fafc">
        <mj-section padding="24px 0">
          <mj-column>
            <mj-text font-size="20px" font-weight="700">${LOGO_TEXT}</mj-text>
          </mj-column>
        </mj-section>
        <mj-section background-color="#ffffff" padding="24px">
          <mj-column>
            <mj-text font-size="18px" font-weight="700">New contact form submission</mj-text>
            <mj-text font-size="14px" color="#52606d">Source: ${escapeHtml(sourceUrl)}</mj-text>
            <mj-divider border-color="#e2e8f0" />
            <mj-table>
              <tr>
                <td style="padding: 6px 0; font-weight: 600;">Name</td>
                <td style="padding: 6px 0;">${escapeHtml(payload.username)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600;">Email</td>
                <td style="padding: 6px 0;">${escapeHtml(payload.email)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600;">Phone</td>
                <td style="padding: 6px 0;">${escapeHtml(payload.phone)}</td>
              </tr>
            </mj-table>
            <mj-text font-size="14px" line-height="1.6">
              <strong>Message:</strong><br />
              ${escapeHtml(payload.message)}
            </mj-text>
            <mj-divider border-color="#e2e8f0" />
            <mj-text font-size="12px" color="#9aa5b1">
              IP: ${escapeHtml(meta.ip || 'unknown')}<br />
              User Agent: ${escapeHtml(meta.userAgent || 'unknown')}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);

  const text = `New contact form submission\n\nName: ${payload.username}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nMessage: ${payload.message}\nSource: ${sourceUrl}\nIP: ${meta.ip || 'unknown'}\nUser Agent: ${meta.userAgent || 'unknown'}`;

  return { subject, html, text };
};

export type { ContactPayload, EmailContent };
