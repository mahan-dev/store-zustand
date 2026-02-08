import { ProductDetailTypes } from "@/types/products/types";

interface FilterCardsProps {
  range?: number[];
  data?: ProductDetailTypes[];
  category?: string;
}
export const filterCards = ({ range, data, category }: FilterCardsProps) => {
  console.log("h2");
  console.log(data);
  console.log("hh");

  if (!data?.length) return;
  let finalData = [...data];
  // if (!Array.isArray(range) || !Array.isArray(data)) return [];

  if (range?.length === 2 && data?.length) {
    if (range[0] > 0 || range[1] < 1000) {
      finalData = data.filter(
        (item) => item.price >= range[0] && item.price <= range[1],
      );
    }
  }
  if (category) {
    console.log(category);
    finalData = finalData.filter((items) => items.category === category);
    console.log(finalData);
  }

  return finalData;
};
