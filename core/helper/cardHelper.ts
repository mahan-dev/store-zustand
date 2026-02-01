import { ProductDetail } from "@/types/products/types";

type TotalItems = (state: ProductDetail[]) => number;
type IsInCart = (state: ProductDetail[], id: number) => boolean;

const isInCart: IsInCart = (state, id) => {
  return state.some((item) => item.id === id);
};

const totalItems: TotalItems = (state) => {
  return state.reduce((acc, cur) => acc + (cur.quantity ?? 0), 0);
};

export { isInCart, totalItems };
