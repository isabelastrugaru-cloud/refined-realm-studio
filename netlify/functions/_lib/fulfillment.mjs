import Stripe from "stripe";
import {
  getFulfillmentUrlForProduct,
  getProductBySiteProductId,
  getProductByStripeProductId,
  getRequiredEnv,
  getSupportEmail,
} from "./env.mjs";
import { sendFulfillmentEmail } from "./mailjet.mjs";

const getStripeClient = () =>
  new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"));

const getPaymentIntentId = (paymentIntent) => {
  if (!paymentIntent) {
    return null;
  }

  return typeof paymentIntent === "string" ? paymentIntent : paymentIntent.id;
};

const getPaymentIntentMetadata = (paymentIntent) => {
  if (!paymentIntent || typeof paymentIntent === "string") {
    return {};
  }

  return paymentIntent.metadata || {};
};

const resolveProductForSession = async (stripe, session) => {
  const siteProductId = session.metadata?.site_product_id;

  if (siteProductId) {
    return getProductBySiteProductId(siteProductId) || null;
  }

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 10,
    expand: ["data.price.product"],
  });

  const stripeProduct = lineItems.data[0]?.price?.product;
  const stripeProductId =
    typeof stripeProduct === "string" ? stripeProduct : stripeProduct?.id;

  if (!stripeProductId) {
    return null;
  }

  return getProductByStripeProductId(stripeProductId) || null;
};

const getSessionWithContext = async (sessionId) => {
  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent"],
  });
  const product = await resolveProductForSession(stripe, session);
  const paymentIntentId = getPaymentIntentId(session.payment_intent);
  const paymentIntent =
    typeof session.payment_intent === "string" && paymentIntentId
      ? await stripe.paymentIntents.retrieve(paymentIntentId)
      : session.payment_intent || null;

  return {
    stripe,
    session,
    product,
    paymentIntent,
    paymentIntentId,
  };
};

export const buildSessionSummary = async (sessionId) => {
  const { session, product, paymentIntent } = await getSessionWithContext(sessionId);
  const paymentIntentMetadata = getPaymentIntentMetadata(paymentIntent);

  return {
    sessionId: session.id,
    status: session.status,
    paymentStatus: session.payment_status,
    customerEmail: session.customer_details?.email || session.customer_email || null,
    customerName: session.customer_details?.name || null,
    productId: product?.id || null,
    productName: product?.stripeProductName || null,
    fulfillmentStatus: paymentIntentMetadata.fulfillment_status || "pending",
    supportEmail: getSupportEmail(),
  };
};

export const fulfillCheckoutSession = async (sessionId, source = "webhook") => {
  const { stripe, session, product, paymentIntent, paymentIntentId } =
    await getSessionWithContext(sessionId);

  if (session.payment_status !== "paid") {
    return {
      fulfilled: false,
      reason: "payment_not_paid",
    };
  }

  if (!product) {
    throw new Error(`No catalog product matched checkout session ${sessionId}`);
  }

  const customerEmail = session.customer_details?.email || session.customer_email;

  if (!customerEmail) {
    throw new Error(`Checkout session ${sessionId} has no customer email`);
  }

  const paymentIntentMetadata = getPaymentIntentMetadata(paymentIntent);

  if (paymentIntentMetadata.fulfillment_status === "sent") {
    return {
      fulfilled: true,
      alreadyFulfilled: true,
      productId: product.id,
      customerEmail,
    };
  }

  const fulfillmentUrl = getFulfillmentUrlForProduct(product);

  if (!fulfillmentUrl) {
    throw new Error(`Missing fulfillment URL for product ${product.id}`);
  }

  await sendFulfillmentEmail({
    customerEmail,
    customerName: session.customer_details?.name || null,
    product,
    fulfillmentUrl,
  });

  if (paymentIntentId) {
    await stripe.paymentIntents.update(paymentIntentId, {
      metadata: {
        fulfillment_status: "sent",
        fulfillment_source: source,
        fulfillment_product_id: product.id,
        fulfillment_email: customerEmail,
        fulfilled_at: new Date().toISOString(),
        last_checkout_session_id: session.id,
      },
    });
  }

  return {
    fulfilled: true,
    alreadyFulfilled: false,
    productId: product.id,
    customerEmail,
  };
};
