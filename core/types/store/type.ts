import { ProductDetailTypes } from "@/types/products/types";

interface ShopStore {
  store: ProductDetailTypes[];
  total: number;
  items: number;
  addItem: (state: ProductDetailTypes) => void;
  increment: (state: ProductDetailTypes) => void;
  decrement: (state: ProductDetailTypes) => void;
  remove: (state: ProductDetailTypes) => void;
  resetStore: () => void;
}

export type { ShopStore };
