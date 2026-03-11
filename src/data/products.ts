export interface Product {
  id: string;
  translationKey: string;
  price: string;
  category: string[];
  stripeLink?: string;
}

export const products: Product[] = [
  {
    id: "starter-pack",
    translationKey: "starterPack",
    price: "€20",
    category: ["toate", "pachete"],
  },
  {
    id: "bathroom-complete",
    translationKey: "bathroomComplete",
    price: "€50",
    category: ["toate", "pachete", "ebook", "cad", "template"],
  },
  {
    id: "beige-contract",
    translationKey: "beigeContract",
    price: "€20",
    category: ["toate", "template"],
  },
  {
    id: "green-presentation",
    translationKey: "greenPresentation",
    price: "€20",
    category: ["toate", "template"],
  },
  {
    id: "kitchen-ebook",
    translationKey: "kitchenEbook",
    price: "€50",
    category: ["toate", "ebook", "cad"],
  },
  {
    id: "bathroom-v2",
    translationKey: "bathroomV2",
    price: "€50",
    category: ["toate", "pachete", "ebook", "cad", "template"],
  },
  {
    id: "millwork-guide",
    translationKey: "millworkGuide",
    price: "€50",
    category: ["toate", "ebook"],
  },
];
