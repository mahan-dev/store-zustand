import { BASE_URL } from "@/api/api";
import { ProductDetail } from "@/types/products/types";

export const dataFetcher = async (): Promise<ProductDetail[]> => {
  try {
    const res: ProductDetail[] = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    }).then((res) => res.json());
    return res;
  } catch (error) {
    const e = error as Error;
    console.log(e);
    return [];
  }
};
