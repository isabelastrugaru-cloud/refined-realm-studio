import { productsCatalog } from "../../../src/data/productsCatalog.js";

const fallbackSiteUrl = "https://designinteriorbucuresti.ro";
const fallbackSupportEmail = "office@designinteriorbucuresti.ro";

export const getEnv = (name) => {
  const netlifyValue =
    typeof Netlify !== "undefined" && Netlify.env ? Netlify.env.get(name) : undefined;

  return netlifyValue || process.env[name];
};

export const getRequiredEnv = (name) => {
  const value = getEnv(name);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export const getSiteUrl = () => {
  const value = getEnv("SITE_URL") || fallbackSiteUrl;

  return value.replace(/\/+$/, "");
};

export const getSupportEmail = () =>
  getEnv("FULFILLMENT_SUPPORT_EMAIL") || fallbackSupportEmail;

export const getProductBySiteProductId = (siteProductId) =>
  productsCatalog.find((product) => product.id === siteProductId);

export const getProductByStripeProductId = (stripeProductId) =>
  productsCatalog.find((product) => product.stripeProductId === stripeProductId);

export const getFulfillmentUrlForProduct = (product) => {
  if (!product?.fulfillmentEnvVar) {
    return null;
  }

  return getEnv(product.fulfillmentEnvVar) || null;
};
