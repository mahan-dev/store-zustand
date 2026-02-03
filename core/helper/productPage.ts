import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

export const productFetcher = async (productId: string) => {
  try {
    const data: ProductDetailTypes = await fetch(
      `${BASE_URL}/products/${productId}`,
    )
      .then((res) => res.json())
      .then((data) => data);

    return data;
  } catch (error) {
    console.log("error", error);
  }
};
