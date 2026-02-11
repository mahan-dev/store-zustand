// import { BASE_URL } from "@/api/api";
// import { ProductDetailTypes } from "@/types/products/types";

import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

// export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
//   try {
//     const res: ProductDetailTypes[] = await fetch(`${BASE_URL}/products`, {
//       cache: "no-store",
//       headers: {
//         Accept: "application/json",
//       },
//     }).then((res) => res.json());

//     return res;
//   } catch (error) {
//     const e = error as Error;
//     console.log(e);
//     return [];
//   }
// };

export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Invalid API response:", await res.text());
      return [];
    }

    const data: ProductDetailTypes[] = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
