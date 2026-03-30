import { productsCatalog } from "./productsCatalog.js";

export interface Product {
  id: string;
  translationKey: string;
  price: string;
  category: string[];
  stripeLink?: string;
}

const getStripeLink = (envVar: string) => {
  const value = import.meta.env[envVar];

  return typeof value === "string" && value.length > 0 ? value : undefined;
};

export const products: Product[] = productsCatalog.map(
  ({ priceDisplay, stripeEnvVar, ...product }) => ({
    ...product,
    price: priceDisplay,
    stripeLink: getStripeLink(stripeEnvVar),
  }),
);
