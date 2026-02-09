import { ProductDetailTypes } from "@/types/products/types";

interface FilterCardsProps {
  range?: number[];
  data?: ProductDetailTypes[];
  category?: string;
}
export const filterCards = ({ range, data, category }: FilterCardsProps) => {
  if (!data?.length) return [];

  let finalData = [...data];

  if (range?.length === 2) {
    if (range[0] > 0 || range[1] < 1000) {
      finalData = finalData.filter(
        (item) => item.price >= range[0] && item.price <= range[1],
      );
    }
  }

  if (category !== "all") {
    finalData = finalData.filter((items) => items.category === category);
  }

  return finalData;
};
