import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { itemsCounter, totalItems } from "@/helper/cardHelper";
import { ShopStore } from "@/types/store/type";

const initialState = {
  store: [],
  items: 0,
  total: 0,
};

const useShopStore = create<ShopStore>()(
  persist(
    immer((set) => ({
      ...initialState,
      addItem: (product) =>
        set((state) => {
          const store = state.store;
          const isExists = store.find((item) => item.id === product.id);

          if (!isExists) {
            state.store.push({ ...product, quantity: 1 });
          }
          state.items = itemsCounter(state.store);
          state.total = totalItems(state.store);
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
          state.store = filteredProduct;
          state.items = itemsCounter(state.store);
          state.total = totalItems(state.store);
        }),

      resetStore: () => {
        set(() => ({ store: [], items: 0, total: 0 }));
        useShopStore.persist.clearStorage();
      },
    })),
    {
      name: "shop-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useShopStore };
