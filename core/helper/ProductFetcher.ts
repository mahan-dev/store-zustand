import { ProductDetailTypes } from "@/types/products/types";

export const BASE_URL = "https://fakestoreapi.com/";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  console.log("hi 1");
  try {
    console.log("hi 2");
    const res = await fetch(`${BASE_URL}products`, {
      cache: "no-store",
    });
    console.log("hi 3");

    const data = await res.json();
    console.log(data)
    console.log("hi 4");

    return data as ProductDetailTypes[];
  } catch (error) {
    console.log("hi 5");
    console.log("this is the error you looking for", error);
    console.log("hi 6");
    return [];
  }
};
