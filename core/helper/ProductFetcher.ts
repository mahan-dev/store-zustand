import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

const revalidate = 1 * 60 * 60 * 24 * 30;

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate },
    });

    return (await res.json()) as ProductDetailTypes[];
  } catch (error) {
    const e = error as Error;
    console.log(e);
    return [];
  }
};
