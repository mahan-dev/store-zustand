import { ProductDetailTypes } from "@/types/products/types";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });
    console.log("fetching");
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`FakeStore API failed: ${res.status}`);
    }
    console.log("error");

    return data as ProductDetailTypes[];
  } catch (error) {
    console.log("this is the error you looking for", error);
    return [];
  }
};
