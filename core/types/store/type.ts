import { ProductDetail } from "@/types/products/types";

interface ShopStore {
  store: ProductDetail[];
  totalItems: number;
  itemsCounter: number;
  addItem: (state: ProductDetail) => void;
  increment?: (state: ProductDetail) => void;
  decrement?: (state: ProductDetail) => void;
  remove?: (state: ProductDetail["id"]) => void;
}

export type { ShopStore };
