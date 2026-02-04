import { ProductDetailTypes } from "@/types/products/types";

const quantityHandler = (state: ProductDetailTypes[], id: number): number => {
  const product = state.findIndex((item) => item.id === id);

  if (product === -1) return 0;
  else {
    return state[product].quantity;
  }
};

export { quantityHandler };
