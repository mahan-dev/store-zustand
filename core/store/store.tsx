import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { itemsCounter, totalItems } from "@/helper/cardHelper";
import { ShopStore } from "@/types/store/type";

const useShopStore = create<ShopStore>()(
  persist(
    immer((set, get) => ({
      store: [],
      items: 0,
      total: 0,
      getItemsCounter: () => itemsCounter(get().store),
      getTotalItems: () => totalItems(get().store),
      addItem: (product) =>
        set((state) => {
          const store = state.store;
          const isExists = store.find((item) => item.id === product.id);

          if (!isExists) {
            state.store.push({ ...product, quantity: 1 });
          }
          // state.itemsCounter =
          state.total = totalItems(store);
        }),

      increment: (product) =>
        set((state) => {
          const index = state.store.find((item) => item.id === product.id);

          if (index) index.quantity += 1;

          state.items = itemsCounter(state.store);
          state.total = totalItems(state.store);
        }),
      decrement: (product) =>
        set((state) => {
          const index = state.store.find((item) => item.id === product.id);

          if (index) index.quantity -= 1;

          state.items = itemsCounter(state.store);
          state.total = totalItems(state.store);
        }),

      remove: (product) =>
        set((state) => {
          const filteredProduct = state.store.filter(
            (item) => item.id !== product.id,
          );
          // const index = state.store.find((item) => item.id === product.id);
          state.store = filteredProduct;
          state.items = 0;
          state.total = totalItems(state.store);
        }),
    })),
    {
      name: "shop-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useShopStore };
