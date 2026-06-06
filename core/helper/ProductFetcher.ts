import { ProductDetailTypes } from "@/types/products/types";

const BASE_URL = "https://fakestoreapi.com/";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const url = `${BASE_URL}products`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return [];
  }
};
