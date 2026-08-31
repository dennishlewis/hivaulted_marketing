# HiVaulted marketing site

Server-rendered HiVaulted marketing site built with Next.js, Vinext, and the Cloudflare Vite plugin.

## Local development

```bash
npm install
npm run dev
```

## Validate

```bash
npm run lint
npm run build
```

## Deploy the staging Worker

Authenticate Wrangler with the intended Cloudflare account, then run:

```bash
npm run deploy:staging
```

This publishes the built site as `hivaulted-marketing-staging` on the account's `workers.dev` subdomain. The demo has safe preview fallbacks when the optional Make webhook secrets are not configured.
