# Cloudflare deployment

This site renders on the server and builds to a Cloudflare Worker plus static assets.

## Required secrets

Create these four Worker secrets from the existing Make.com webhook URLs:

- `MAKE_IMAGE_SEARCH_WEBHOOK_URL`
- `MAKE_IMAGE_UPLOAD_WEBHOOK_URL`
- `MAKE_CAPTION_WEBHOOK_URL`
- `MAKE_DELIVERY_WEBHOOK_URL`

The webhook URLs intentionally remain server-side. Do not prefix them with
`NEXT_PUBLIC_` or commit them to source control.

## Deploy

1. Run `npm run build`.
2. Add each secret with `npx wrangler secret put SECRET_NAME --config dist/server/wrangler.json`.
3. Run `npm run deploy:cloudflare`.
4. Attach `www.hivaulted.com` as the Worker custom domain in Cloudflare.

The demo works in a safe local preview mode without secrets. Image upload and
real email delivery become active after the Make webhook secrets are installed.
