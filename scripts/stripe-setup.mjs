import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { productsCatalog } from "../src/data/productsCatalog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const envPath = path.resolve(projectRoot, ".env");
const stripeApiBase = "https://api.stripe.com/v1";

const readEnvFile = async (filePath) => {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const entries = {};

    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) {
        continue;
      }

      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      entries[key] = value;
    }

    return entries;
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }

    throw error;
  }
};

const buildEnv = async () => {
  const fileEnv = await readEnvFile(envPath);

  return {
    ...fileEnv,
    ...process.env,
  };
};

const stripTrailingSlash = (value) => value.replace(/\/+$/, "");

const toFormBody = (params) => {
  const body = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }

    body.append(key, String(value));
  }

  return body.toString();
};

const stripeRequest = async ({ method, secretKey, pathName, query, body }) => {
  const url = new URL(pathName, stripeApiBase);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...(body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: body ? toFormBody(body) : undefined,
  });

  const text = await response.text();
  let payload = {};

  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = { raw: text };
    }
  }

  if (!response.ok) {
    const message = payload?.error?.message || response.statusText;
    const error = new Error(
      `Stripe ${method} ${pathName} failed (${response.status}): ${message}`,
    );

    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
};

const listAllStripeObjects = async ({ secretKey, pathName, query }) => {
  const data = [];
  let startingAfter;

  while (true) {
    const page = await stripeRequest({
      method: "GET",
      secretKey,
      pathName,
      query: {
        ...query,
        ...(startingAfter ? { starting_after: startingAfter } : {}),
      },
    });

    data.push(...page.data);

    if (!page.has_more || page.data.length === 0) {
      return data;
    }

    startingAfter = page.data[page.data.length - 1].id;
  }
};

const getProductUrl = (siteUrl, productId) => `${stripTrailingSlash(siteUrl)}/shop/${productId}`;
const getSuccessUrl = (siteUrl) =>
  `${stripTrailingSlash(siteUrl)}/success?session_id={CHECKOUT_SESSION_ID}`;

const getOrCreateProduct = async (secretKey, siteUrl, product) => {
  const body = {
    name: product.stripeProductName,
    description: product.stripeProductDescription,
    url: getProductUrl(siteUrl, product.id),
    "metadata[site_product_id]": product.id,
    "metadata[translation_key]": product.translationKey,
  };

  try {
    await stripeRequest({
      method: "GET",
      secretKey,
      pathName: `/products/${product.stripeProductId}`,
    });

    return stripeRequest({
      method: "POST",
      secretKey,
      pathName: `/products/${product.stripeProductId}`,
      body,
    });
  } catch (error) {
    if (error.status !== 404) {
      throw error;
    }
  }

  return stripeRequest({
    method: "POST",
    secretKey,
    pathName: "/products",
    body: {
      id: product.stripeProductId,
      ...body,
    },
  });
};

const getOrCreatePrice = async (secretKey, product, stripeProductId) => {
  const prices = await listAllStripeObjects({
    secretKey,
    pathName: "/prices",
    query: {
      product: stripeProductId,
      active: true,
      limit: 100,
      type: "one_time",
    },
  });

  const existingPrice = prices.find(
    (price) =>
      price.unit_amount === product.unitAmount &&
      price.currency === product.currency &&
      price.type === "one_time",
  );

  if (existingPrice) {
    return existingPrice;
  }

  return stripeRequest({
    method: "POST",
    secretKey,
    pathName: "/prices",
    body: {
      product: stripeProductId,
      currency: product.currency,
      unit_amount: product.unitAmount,
      "metadata[site_product_id]": product.id,
    },
  });
};

const getOrCreatePaymentLink = async (secretKey, siteUrl, product, priceId) => {
  const paymentLinks = await listAllStripeObjects({
    secretKey,
    pathName: "/payment_links",
    query: {
      limit: 100,
    },
  });

  const existingLink = paymentLinks.find(
    (link) =>
      link.active &&
      link.metadata?.site_product_id === product.id &&
      link.metadata?.price_id === priceId,
  );

  const body = {
    "line_items[0][price]": priceId,
    "line_items[0][quantity]": 1,
    "metadata[site_product_id]": product.id,
    "metadata[stripe_product_id]": product.stripeProductId,
    "metadata[price_id]": priceId,
    "after_completion[type]": "redirect",
    "after_completion[redirect][url]": getSuccessUrl(siteUrl),
  };

  if (existingLink) {
    return stripeRequest({
      method: "POST",
      secretKey,
      pathName: `/payment_links/${existingLink.id}`,
      body,
    });
  }

  return stripeRequest({
    method: "POST",
    secretKey,
    pathName: "/payment_links",
    body,
  });
};

const getStripeMode = (secretKey) => {
  if (secretKey.startsWith("sk_live_")) {
    return "live";
  }

  if (secretKey.startsWith("sk_test_")) {
    return "test";
  }

  return "unknown";
};

const printResults = (siteUrl, results) => {
  console.log("");
  console.log(`Stripe setup completed for ${siteUrl}`);
  console.log("");
  console.log("Netlify env vars to add:");

  for (const result of results) {
    console.log(`${result.stripeEnvVar}=${result.paymentLinkUrl}`);
  }

  console.log("");
  console.log("Reference IDs:");

  for (const result of results) {
    console.log(
      [
        `${result.id}:`,
        `product=${result.stripeProductId}`,
        `price=${result.stripePriceId}`,
        `payment_link=${result.paymentLinkId}`,
      ].join(" "),
    );
  }

  console.log("");
  console.log("After adding the VITE_* values in Netlify, trigger a new deploy.");
};

export const main = async () => {
  const env = await buildEnv();
  const secretKey =
    env.STRIPE_SECRET_KEY || env.STRIPE_API_KEY || env.STRIPE_SECRET;

  if (!secretKey) {
    throw new Error(
      "Missing STRIPE_SECRET_KEY in .env. Add your Stripe secret key before running this script.",
    );
  }

  const siteUrl = env.SITE_URL || "https://designinteriorbucuresti.ro";

  console.log(`Using Stripe ${getStripeMode(secretKey)} mode`);
  console.log(`Using site URL ${siteUrl}`);

  const results = [];

  for (const product of productsCatalog) {
    const stripeProduct = await getOrCreateProduct(secretKey, siteUrl, product);
    const stripePrice = await getOrCreatePrice(
      secretKey,
      product,
      stripeProduct.id,
    );
    const paymentLink = await getOrCreatePaymentLink(
      secretKey,
      siteUrl,
      product,
      stripePrice.id,
    );

    results.push({
      id: product.id,
      stripeEnvVar: product.stripeEnvVar,
      stripeProductId: stripeProduct.id,
      stripePriceId: stripePrice.id,
      paymentLinkId: paymentLink.id,
      paymentLinkUrl: paymentLink.url,
    });

    console.log(`Processed ${product.id}`);
  }

  printResults(siteUrl, results);
};

const isEntrypoint =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isEntrypoint) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
