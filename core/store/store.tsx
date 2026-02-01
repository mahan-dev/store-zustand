import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { totalItems } from "@/helper/cardHelper";
import { ProductDetail } from "@/types/products/types";
import { ShopStore } from "@/types/store/type";

const useShopStore = create<ShopStore>()(
  immer((set) => ({
    store: [],
    itemsCounter: 0,
    totalItems: 0,
    addItem: (product: ProductDetail) =>
      set((state) => {
        const store = state.store;
        const isExists = store.find((item) => item.id === product.id);

        if (!isExists) {
          state.store.push({ ...product, quantity: 1 });
        }

        state.totalItems = totalItems(store);
      }),

    increment: (product) =>
      set((state) => {
        const index = state.store.findIndex((item) => item.id === product.id);

        const updateIndex: ShopStore["store"] = [...state.store];
        if (index !== -1) {
          updateIndex[index] = {
            ...updateIndex[index],
            quantity: (updateIndex[index].quantity ?? 0) + 1,
          };
        }
      }),
  })),
);

export { useShopStore };
