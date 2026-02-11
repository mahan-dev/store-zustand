import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const res: ProductDetailTypes[] = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());

    return res;
  } catch (error) {
    const e = error as Error;
    console.log(e);
    return [];
  }
};
