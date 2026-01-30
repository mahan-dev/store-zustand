import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { ProductDetail } from "@/types/products/types";
import { ShopStore } from "@/types/store/type";

const useShopStore = create<ShopStore>()(
  immer((set) => ({
    store: [],
    addItem: (product: ProductDetail) =>
      set((state) => {
        const isExists = state.store.findIndex(
          (item) => item.id === product.id
        );

        const store: ShopStore["store"] = [...state.store];

        if (isExists === -1) {
          store.push({ ...product, quantity: 1 });
        } else {
          return state;
        }
      }),

    increment: (product) =>
      set((state) => {
        const isExists = state.store.findIndex(
          (item) => item.id === product.id
        );
        if (isExists !== -1) {
        }
      }),
  }))
);

export { useShopStore };
