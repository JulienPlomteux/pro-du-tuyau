# ── Build stage ────────────────────────────────────────────────────────────
FROM node:22-alpine AS build-stage

WORKDIR /app

RUN npm install -g npm@latest

# Install dependencies first (layer cache)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build app
RUN npm run build

# ── Production stage ────────────────────────────────────────────────────────
# Nitro runs as a standalone Node.js server on port 3000.
# Caddy (or any reverse proxy) handles TLS, compression and caching in front.
FROM node:22-alpine AS production-stage

WORKDIR /app

# Copy sharp native binaries — JS bundler can't process .node files
COPY --from=build-stage /app/node_modules/sharp ./node_modules/sharp

# Copy only the Nitro output — no other node_modules needed at runtime
COPY --from=build-stage /app/.output ./.output

# Nitro listens on 3000 by default
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]