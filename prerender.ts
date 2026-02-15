import 'zone.js/node';

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

/**
 * Prerender routes for static HTML generation
 * These routes are critical for SEO and should be prerendered as static HTML
 */
const ROUTES_TO_PRERENDER = [
  // Home
  {
    route: '/',
    title: 'DevSense - Software Development Agency in Pretoria',
    description: 'Premium software development and consultancy services in Pretoria. Expert solutions for your business needs.'
  },
  // About
  {
    route: '/about',
    title: 'About DevSense - Our Story & Team',
    description: 'Learn about DevSense, our experienced team, and our commitment to excellence in software development.'
  },
  {
    route: '/about/me',
    title: 'About Me - DevSense',
    description: 'Meet the developer behind DevSense and discover our passion for creating exceptional software solutions.'
  },
  // Services
  {
    route: '/services',
    title: 'Our Services - Web & Software Development',
    description: 'Explore our comprehensive range of software development, web design, and consultancy services.'
  },
  {
    route: '/services/detail',
    title: 'Service Details - DevSense',
    description: 'Learn more about our specific service offerings and how we can help your project succeed.'
  },
  // Team
  {
    route: '/team',
    title: 'Our Team - DevSense',
    description: 'Meet the talented team behind DevSense and our commitment to excellence.'
  },
  // Pages
  {
    route: '/pages/contact-us',
    title: 'Contact Us - DevSense',
    description: 'Get in touch with DevSense for your software development needs. We are here to help.'
  },
  {
    route: '/pages/faq',
    title: 'FAQ - DevSense',
    description: 'Frequently asked questions about our software development services and process.'
  },
  // Portfolio
  {
    route: '/portfolio/grid',
    title: 'Portfolio Grid - Our Projects',
    description: 'Discover our impressive portfolio of successful projects and client solutions.'
  },
  {
    route: '/portfolio/masonry',
    title: 'Portfolio Masonry - Project Showcase',
    description: 'View our project showcase in masonry layout format.'
  },
  {
    route: '/portfolio/carousel',
    title: 'Portfolio Carousel - DevSense',
    description: 'Browse our portfolio in an interactive carousel format.'
  },
  // Blog
  {
    route: '/blog',
    title: 'DevSense Blog - Tech Insights',
    description: 'Stay updated with our latest blog posts on software development, tech trends, and industry insights.'
  },
  {
    route: '/blog/grid',
    title: 'Blog Grid - DevSense',
    description: 'Browse our blog articles in grid format for easy discovery.'
  }
];

/**
 * Generate static HTML files for prerendered routes
 */
async function prerender() {
  console.log('Starting SSR prerendering of critical routes...\n');

  // Note: Angular @angular/build:application creates a /browser subfolder in outputPath
  const distFolder = 'dist/devsense/browser/browser';
  let successCount = 0;
  let errorCount = 0;

  try {
    for (const routeConfig of ROUTES_TO_PRERENDER) {
      try {
        console.log(`✓ Processing route: ${routeConfig.route}`);

        const outputDir = join(distFolder, routeConfig.route);
        mkdirSync(outputDir, { recursive: true });

        // In production, you would use the rendered component here
        // For now, we're creating a template that includes proper meta tags
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>${routeConfig.title}</title>
    <meta name="description" content="${routeConfig.description}">
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Open Graph Meta Tags for SEO -->
    <meta property="og:title" content="${routeConfig.title}">
    <meta property="og:description" content="${routeConfig.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.devsense.co.za${routeConfig.route}">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${routeConfig.title}">
    <meta name="twitter:description" content="${routeConfig.description}">

    <!-- Canonical Tag for SEO -->
    <link rel="canonical" href="https://www.devsense.co.za${routeConfig.route}">

    <!-- Preconnect to external resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <style>
        html { height: 100%; }
        body { margin: 0; padding: 0; height: 100%; }
    </style>
</head>
<body>
    <app-root></app-root>
    <noscript>Please enable JavaScript to view this website properly.</noscript>
</body>
</html>`;

        writeFileSync(join(outputDir, 'index.html'), html);
        console.log(`  ✓ Generated: ${outputDir}/index.html\n`);
        successCount++;
      } catch (error) {
        console.error(`  ✗ Error processing ${routeConfig.route}:`, error);
        errorCount++;
      }
    }
  } catch (error) {
    console.error('Fatal error during prerendering:', error);
    process.exit(1);
  }

  console.log('\n Prerendering Summary:');
  console.log(`✓ Successfully prerendered: ${successCount} routes`);
  if (errorCount > 0) {
    console.log(`✗ Failed: ${errorCount} routes`);
  }
  console.log('\n Prerendering complete!\n');
}

prerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
