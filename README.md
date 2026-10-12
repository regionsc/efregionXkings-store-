# EFREGION Mobile Store

A mobile-first, static storefront designed for iOS and Android browsers, with an installable PWA foundation. Desktop is not a target; the layout is intentionally phone-focused.

## Configure WhatsApp
Edit `app.js` and replace `91XXXXXXXXXX` in `WHATSAPP_NUMBER` with your business number in international format, digits only. For India, use 91 followed by the number, without `+`, spaces, or dashes.

## Update products
Edit the `products` array in `app.js`. The shown products and prices are placeholders/demo content. Replace them with accurate listings you are permitted to sell before launch.

## Preview
Open `index.html` in a browser for a basic preview. For PWA/service-worker testing, serve this folder over localhost (with Node.js installed, run `npx serve .` from this directory).

## Publish free
You can start with a static host's free tier and its free subdomain; free-plan limits and terms can change. A custom domain usually costs extra. Typical workflow: upload the files to a GitHub repository, import it into a static host such as Netlify, deploy, then test on iOS Safari and Android Chrome.

## Add to home screen
- iPhone: open the deployed HTTPS website in Safari → Share → Add to Home Screen.
- Android: open it in Chrome → browser menu → Install app or Add to Home screen (wording varies).

## Limitations
This is a frontend demo only. It has no database, secure admin dashboard, inventory management, customer accounts, or order tracking. WhatsApp enquiries do not confirm payment or an order. Never collect passwords, OTPs, recovery codes or payment PINs. Confirm product, final price, fulfilment and refund terms in writing. Only publish real reviews/proofs with permission.

Check the relevant game's/platform terms before listing digital products. Do not offer account transfers where prohibited.
