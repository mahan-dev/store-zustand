import { ProductDetailTypes } from "@/types/products/types";

export const BASE_URL = "https://fakestoreapi.com/";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const res = await fetch(`${BASE_URL}products`, {
      cache: "no-store",
    });

    const data = await res.json();

    return data as ProductDetailTypes[];
  } catch (error) {
    console.log("this is the error you looking for", error);
    return [];
  }
};
