import { ProductDetail } from "@/types/products/types";

interface ShopStore {
  store: ProductDetail[];
  total: number;
  items: number;
  addItem: (state: ProductDetail) => void;
  increment: (state: ProductDetail) => void;
  decrement: (state: ProductDetail) => void;
  remove: (state: ProductDetail) => void;
  getTotalItems: ( ) => void;
  getItemsCounter: () => void;
}

export type { ShopStore };
