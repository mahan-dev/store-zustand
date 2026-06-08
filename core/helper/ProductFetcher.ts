import { ProductDetailTypes } from "@/types/products/types";

export const BASE_URL = "https://fakestoreapi.com/";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const url = `${BASE_URL}products`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("this is the error you looking for", error)
    return [];
  }
};
