import { ProductDetailTypes } from "@/types/products/types";

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const url = `https://fakestoreapi.com/products`;
    console.log("[dataFetcher] Fetching:", url);

    const res = await fetch(url, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.error("[dataFetcher] Exception:", error);
    return [];
  }
};
