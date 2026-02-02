import { ProductDetail } from "@/types/products/types";

const quantityHandler = (state: ProductDetail[], id: number): number => {
  const product = state.findIndex((item) => item.id === id);
  console.log(product);

  if (product === -1) return 0;
  else {
    return state[product].quantity;
  }
};

export { quantityHandler };
