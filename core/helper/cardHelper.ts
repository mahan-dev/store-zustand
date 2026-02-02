import { ProductDetail } from "@/types/products/types";

type TotalItems = (state: ProductDetail[]) => number;
type IsInCart = (state: ProductDetail[], id: number) => boolean;
type ItemsCounter = (state: ProductDetail[]) => number;

const isInCart: IsInCart = (state, id) => {
  return state.some((item) => item.id === id);
};

const totalItems: TotalItems = (state) => {
  return state.reduce((acc, cur) => acc + cur.quantity, 0);
};
const itemsCounter: ItemsCounter = (state) => {
  return state.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
};

export { isInCart, totalItems, itemsCounter };
