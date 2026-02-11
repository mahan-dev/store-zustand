// import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  const res: ProductDetailTypes[] = await fetch(
    `https://fakestoreapi.com/products`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    },
  ).then((res) => res.json());

  return res;
};
