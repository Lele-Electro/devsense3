import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { CommonEngine } from '@angular/ssr/node';
import bootstrap from './src/main.server.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// When built, server.mjs runs from dist/devsense/browser/server/
// Browser files are in dist/devsense/browser/browser/ (sibling)
const browserDistFolder = resolve(__dirname, '../browser');
// SSR template is in the same server folder
const indexHtml = join(__dirname, 'index.server.html');

// Create CommonEngine instance for SSR
const commonEngine = new CommonEngine();

// Serve static files with long cache for production
app.use(express.static(browserDistFolder, {
  maxAge: '1y',
  etag: false,
  index: false // Don't serve index.html for directories
}));

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

