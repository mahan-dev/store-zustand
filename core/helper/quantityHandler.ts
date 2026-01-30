import { ShopStore } from "@/types/store/type";

const quantityHandler = (id: number, state: ShopStore): number => {
  const product = state.store.findIndex((item) => item.id === id);

  if (product === -1) return 0;
  else {
    return state.store[product].quantity ?? 0;
  }
};

export { quantityHandler };
