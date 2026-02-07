import { ProductDetailTypes } from "@/types/products/types";

export const filterCards = (range: number[], data: ProductDetailTypes[]) => {
  return range[0] > 0 || range[1] < 1000
    ? data.filter((item) => item.price >= range[0] && item.price <= range[1])
    : data;
};
