import { ProductDetailTypes } from "@/types/products/types";

type TotalItems = (state: ProductDetailTypes[]) => number;
type IsInCart = (state: ProductDetailTypes[], id: number) => boolean;
type ItemsCounter = (state: ProductDetailTypes[]) => number;

const isInCart: IsInCart = (state, id) => {
  return state.some((item) => item.id === id);
};

const totalItems: TotalItems = (state) => {
  return state.reduce((acc, cur) => acc + cur.quantity, 0);
};
const itemsCounter: ItemsCounter = (state) => {
  return +state
    .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    .toFixed(2);
};

export { isInCart, totalItems, itemsCounter };
