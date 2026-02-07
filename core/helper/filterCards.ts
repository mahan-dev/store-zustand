import { ProductDetailTypes } from "@/types/products/types";

interface FilterCardsProps {
  range?: number[];
  data?: ProductDetailTypes[];
  category?: string;
}
export const filterCards = ({ range, data, category }: FilterCardsProps) => {
  console.log('h2')
  console.log(data)
  if (!Array.isArray(range) || !Array.isArray(data)) return [];
console.log("hh")

  let finalData = [...data];
  if (range[0] > 0 || range[1] < 1000) {
    finalData = data.filter(
      (item) => item.price >= range[0] && item.price <= range[1],
    );
  }
  if (category) {
    finalData = finalData.filter((items) => items.category.includes(category));
  }

  return finalData;
};
