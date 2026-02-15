# Dockerfile for SSR deployment
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production --legacy-peer-deps

# Copy built application
COPY dist ./dist
COPY server.ts ./
COPY tsconfig.json ./

# Compile TypeScript server if needed
RUN npm install -g typescript
RUN tsc server.ts --outDir dist/server

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start SSR server
CMD ["node", "dist/server/main.js"]
