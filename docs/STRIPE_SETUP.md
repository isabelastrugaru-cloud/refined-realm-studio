# Stripe And Post-Payment Workflow

This project now uses a proper post-payment flow:

- Stripe Payment Links for checkout
- a Stripe-hosted checkout page for payment
- a success page on the site for customer-facing status
- a Netlify Function webhook for the real fulfillment trigger
- Mailjet for transactional delivery emails

## Why The Success Page Alone Is Not Enough

A redirect to `/success?session_id=...` is useful for user experience, but it is not a reliable fulfillment trigger by itself.

Customers can:

- close the tab before the redirect
- lose connection after payment
- never return to the site after Stripe confirms the charge

That is why the current implementation uses:

- `success` page for UX and order-status display
- Stripe webhook for the actual email fulfillment

## Current Flow

1. Customer clicks **Buy** on a product page.
2. The site opens a Stripe Payment Link.
3. Stripe collects payment.
4. Stripe redirects the customer to:

```text
/success?session_id={CHECKOUT_SESSION_ID}
```

5. The success page calls a Netlify Function to verify the Checkout Session and display the order state.
6. Separately, Stripe sends a webhook to Netlify.
7. The webhook verifies the event signature, confirms the paid session, and sends the delivery email through Mailjet.
8. The delivery email includes the configured fulfillment URL for the purchased product.

## Files Involved

### Frontend

- `src/pages/Success.tsx`
- `src/data/products.ts`
- `src/data/productsCatalog.js`
- `src/App.tsx`
- `src/entry-server.tsx`
- `scripts/prerender.mjs`

### Stripe Setup

- `scripts/stripe-setup.mjs`

### Netlify Functions

- `netlify/functions/stripe-webhook.mjs`
- `netlify/functions/stripe-session-status.mjs`
- `netlify/functions/_lib/env.mjs`
- `netlify/functions/_lib/fulfillment.mjs`
- `netlify/functions/_lib/mailjet.mjs`

## Environment Variables

### Stripe

Add these locally in `.env` when running the Stripe setup script:

```env
STRIPE_SECRET_KEY=sk_test_or_sk_live_here
SITE_URL=https://designinteriorbucuresti.ro
```

Add these in Netlify site environment variables:

```env
STRIPE_SECRET_KEY=sk_live_or_sk_test_here
STRIPE_WEBHOOK_SECRET=whsec_...
SITE_URL=https://designinteriorbucuresti.ro
```

### Mailjet

Add these in Netlify:

```env
MAILJET_API_KEY=...
MAILJET_API_SECRET=...
MAILJET_FROM_EMAIL=office@designinteriorbucuresti.ro
MAILJET_FROM_NAME=Jubilee Luxury Design
FULFILLMENT_SUPPORT_EMAIL=office@designinteriorbucuresti.ro
```

### Payment Link Env Vars Used By The Frontend

These are public build-time vars used by the frontend:

```env
VITE_STRIPE_PAYMENT_LINK_STARTER_PACK=...
VITE_STRIPE_PAYMENT_LINK_BATHROOM_COMPLETE=...
VITE_STRIPE_PAYMENT_LINK_BEIGE_CONTRACT=...
VITE_STRIPE_PAYMENT_LINK_GREEN_PRESENTATION=...
VITE_STRIPE_PAYMENT_LINK_KITCHEN_EBOOK=...
VITE_STRIPE_PAYMENT_LINK_BATHROOM_V2=...
VITE_STRIPE_PAYMENT_LINK_MILLWORK_GUIDE=...
```

### Fulfillment URLs Used By The Webhook

These are private Netlify env vars used to build the delivery email:

```env
FULFILLMENT_URL_STARTER_PACK=...
FULFILLMENT_URL_BATHROOM_COMPLETE=...
FULFILLMENT_URL_BEIGE_CONTRACT=...
FULFILLMENT_URL_GREEN_PRESENTATION=...
FULFILLMENT_URL_KITCHEN_EBOOK=...
FULFILLMENT_URL_BATHROOM_V2=...
FULFILLMENT_URL_MILLWORK_GUIDE=...
```

Each value should point to the real asset or secure delivery URL for that product.

## Product Mapping

| Site Product ID | Display Name | Price | Currency | Stripe Product ID | Frontend Payment Link Var | Fulfillment URL Var |
|---|---|---:|---|---|---|---|
| `starter-pack` | Starter Pack Client | 20.00 | `eur` | `dib_starter_pack` | `VITE_STRIPE_PAYMENT_LINK_STARTER_PACK` | `FULFILLMENT_URL_STARTER_PACK` |
| `bathroom-complete` | Bathroom eBook + CAD Files + Template | 50.00 | `eur` | `dib_bathroom_complete` | `VITE_STRIPE_PAYMENT_LINK_BATHROOM_COMPLETE` | `FULFILLMENT_URL_BATHROOM_COMPLETE` |
| `beige-contract` | BEIGE - Template Contract si Oferta de Pret | 20.00 | `eur` | `dib_beige_contract` | `VITE_STRIPE_PAYMENT_LINK_BEIGE_CONTRACT` | `FULFILLMENT_URL_BEIGE_CONTRACT` |
| `green-presentation` | GREEN - Template Prezentare Companie | 20.00 | `eur` | `dib_green_presentation` | `VITE_STRIPE_PAYMENT_LINK_GREEN_PRESENTATION` | `FULFILLMENT_URL_GREEN_PRESENTATION` |
| `kitchen-ebook` | Kitchen eBook + CAD Files | 50.00 | `eur` | `dib_kitchen_ebook` | `VITE_STRIPE_PAYMENT_LINK_KITCHEN_EBOOK` | `FULFILLMENT_URL_KITCHEN_EBOOK` |
| `bathroom-v2` | Bathroom eBook + CAD Files + Template (V2) | 50.00 | `eur` | `dib_bathroom_v2` | `VITE_STRIPE_PAYMENT_LINK_BATHROOM_V2` | `FULFILLMENT_URL_BATHROOM_V2` |
| `millwork-guide` | Millwork - Ghid complet pentru mobilier custom | 50.00 | `eur` | `dib_millwork_guide` | `VITE_STRIPE_PAYMENT_LINK_MILLWORK_GUIDE` | `FULFILLMENT_URL_MILLWORK_GUIDE` |

## Setup Steps

### Step 1: Install Dependencies

Run:

```sh
npm install
```

This is required because the Netlify webhook now uses the official Stripe library.

### Step 2: Configure Local Stripe Credentials

Add at least this to your local `.env`:

```env
STRIPE_SECRET_KEY=sk_test_...
SITE_URL=https://designinteriorbucuresti.ro
```

### Step 3: Create Or Update Stripe Products And Payment Links

Run:

```sh
npm run stripe:setup
```

The script does all of this:

- creates or updates Stripe products
- creates or reuses prices
- creates or updates payment links
- configures payment links to redirect to the site success page
- prints the `VITE_STRIPE_PAYMENT_LINK_*` env vars to copy into Netlify

### Step 4: Add Frontend Payment Link Vars To Netlify

In Netlify:

1. Open **Site configuration**
2. Open **Environment variables**
3. Add every `VITE_STRIPE_PAYMENT_LINK_*` value printed by the script
4. Save

### Step 5: Add Fulfillment And Mailjet Vars To Netlify

Add:

- `STRIPE_SECRET_KEY`
- `SITE_URL`
- `MAILJET_API_KEY`
- `MAILJET_API_SECRET`
- `MAILJET_FROM_EMAIL`
- optional `MAILJET_FROM_NAME`
- optional `FULFILLMENT_SUPPORT_EMAIL`
- all `FULFILLMENT_URL_*` product links

### Step 6: Deploy The Site So Functions Exist

Deploy the updated code to Netlify.

This is required before configuring the Stripe webhook, because Stripe needs a live endpoint URL.

### Step 7: Configure The Stripe Webhook Endpoint

In Stripe Dashboard:

1. Go to **Developers**
2. Go to **Webhooks**
3. Add endpoint:

```text
https://designinteriorbucuresti.ro/.netlify/functions/stripe-webhook
```

4. Subscribe at minimum to:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
5. Copy the webhook signing secret

It looks like:

```text
whsec_...
```

### Step 8: Add `STRIPE_WEBHOOK_SECRET` To Netlify

In Netlify environment variables, add:

```env
STRIPE_WEBHOOK_SECRET=whsec_...
```

Then deploy again.

### Step 9: Test In Stripe Test Mode

Recommended order:

1. Use `sk_test_...`
2. Run `npm run stripe:setup`
3. Put the generated `VITE_...` values into Netlify
4. Set test `STRIPE_WEBHOOK_SECRET`
5. Set Mailjet and fulfillment env vars
6. Deploy
7. Complete a test purchase
8. Confirm:
   - Stripe redirects to `/success`
   - the success page shows the paid order
   - the customer receives the Mailjet fulfillment email

### Step 10: Switch To Live Mode

When test mode is working:

1. Replace local `STRIPE_SECRET_KEY` with `sk_live_...`
2. Run `npm run stripe:setup` again
3. Replace the Netlify `VITE_STRIPE_PAYMENT_LINK_*` vars with live values
4. Create or update the live Stripe webhook
5. Replace `STRIPE_WEBHOOK_SECRET` in Netlify with the live secret
6. Deploy again

## What The Success Page Does

The success page:

- reads `session_id` from the URL
- calls `/.netlify/functions/stripe-session-status`
- checks the Checkout Session server-side
- shows the customer whether payment is paid and whether fulfillment was sent

The success page does **not** send the email itself.

That is intentional.

## What The Webhook Does

The webhook:

- verifies the Stripe signature with `STRIPE_WEBHOOK_SECRET`
- handles successful Checkout Session events
- finds the purchased product in the catalog
- finds the matching `FULFILLMENT_URL_*`
- sends the Mailjet fulfillment email
- marks the PaymentIntent metadata as fulfilled

That makes the webhook the authoritative source of post-payment fulfillment.

## Troubleshooting

### Customer paid, but no email arrived

Check:

- `MAILJET_API_KEY`
- `MAILJET_API_SECRET`
- `MAILJET_FROM_EMAIL`
- the relevant `FULFILLMENT_URL_*`
- Stripe webhook delivery logs
- Netlify function logs

### Stripe redirects to success page, but the page shows pending

Possible reasons:

- the webhook has not run yet
- Stripe is still confirming payment
- `STRIPE_SECRET_KEY` is missing or wrong in Netlify

### Success page works, but customer still gets no product

Then the webhook or Mailjet config is failing.

The success page is only status UI. The delivery email comes from the webhook path.

### Can I skip the webhook and just use the success page token?

You can use the success page to check the session on the server, but you should not rely on that alone for fulfillment.

Customers do not always return to the site after payment, so the webhook must remain the real trigger.

## Security Notes

- `STRIPE_SECRET_KEY` must never be exposed as a `VITE_...` variable
- `STRIPE_WEBHOOK_SECRET` must stay private
- Mailjet API credentials must stay private
- `VITE_STRIPE_PAYMENT_LINK_*` values are public by design
- `FULFILLMENT_URL_*` values should be treated as sensitive operational links

## Summary

The correct architecture for this project is now:

- customer pays on Stripe
- Stripe redirects to the site success page for UX
- Stripe webhook triggers fulfillment
- Mailjet sends the product email
- Netlify Functions keep all secret verification and email logic off the client
