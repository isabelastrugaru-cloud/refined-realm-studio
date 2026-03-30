import Stripe from "stripe";
import { getRequiredEnv } from "./_lib/env.mjs";
import { fulfillCheckoutSession } from "./_lib/fulfillment.mjs";

const getStripeClient = () =>
  new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"));

const response = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed" });
  }

  const signature =
    event.headers["stripe-signature"] || event.headers["Stripe-Signature"];

  if (!signature) {
    return response(400, { error: "Missing Stripe-Signature header" });
  }

  const webhookSecret = getRequiredEnv("STRIPE_WEBHOOK_SECRET");
  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body || "", "base64").toString("utf8")
    : event.body || "";

  let stripeEvent;

  try {
    const stripe = getStripeClient();
    stripeEvent = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    return response(400, { error: `Webhook signature verification failed: ${error.message}` });
  }

  try {
    if (
      stripeEvent.type === "checkout.session.completed" ||
      stripeEvent.type === "checkout.session.async_payment_succeeded"
    ) {
      await fulfillCheckoutSession(stripeEvent.data.object.id, "webhook");
    }

    return response(200, { received: true });
  } catch (error) {
    console.error("Stripe fulfillment error", error);
    return response(500, { error: error.message });
  }
};
