#!/bin/bash

# SSR Production Deployment Script
# Usage: ./deploy-ssr.sh

set -e

echo "🚀 Building Angular app with SSR..."

# Install dependencies
npm install --legacy-peer-deps

# Build client bundle
echo "📦 Building client bundle..."
npm run build -- --configuration production

# Build server bundle
echo "🖥️ Building server bundle..."
npm run build -- --configuration production --server

# Generate static prerendered pages
echo "⚡ Prerendering static pages..."
npm run prerender:routes

# Create output directory structure
echo "📁 Creating deployment structure..."
mkdir -p deploy/dist
mkdir -p deploy/node_modules

# Copy built files
cp -r dist/devsense/browser deploy/dist/
cp -r dist/devsense/server deploy/dist/
cp server.ts deploy/
cp package.json deploy/
cp package-lock.json deploy/

# Install production dependencies only
cd deploy
npm install --production --legacy-peer-deps

# Compile server.ts if needed
echo "✅ SSR Production Build Complete!"
echo ""
echo "Deploy folder ready at: ./deploy"
echo ""
echo "To start the server:"
echo "  npm run serve:ssr"
echo ""
echo "Or in production with PM2:"
echo "  pm2 start dist/server/main.js --name 'devsense-ssr'"
