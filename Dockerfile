# 1. Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 2. Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3. Runner (production)
FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
USER nextjs
ENTRYPOINT ["node", "server.js"]
