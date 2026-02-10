import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

const revalidate = 1 * 60 * 60 * 24 * 30;

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 60 * 60 * 24 * 30 },
      headers: {
        Accept: "application/json",
      },
    });

    // 🔥 VERY IMPORTANT CHECK
    const contentType = res.headers.get("content-type");

    if (!res.ok || !contentType?.includes("application/json")) {
      console.error("Invalid API response");
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch crashed:", error);
    return [];
  }
};
