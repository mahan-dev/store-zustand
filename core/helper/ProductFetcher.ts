// import { BASE_URL } from "@/api/api";
// import { ProductDetailTypes } from "@/types/products/types";

// const revalidate = 1 * 60 * 60 * 24;
// export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
//   try {
//     const res: ProductDetailTypes[] = await fetch(`${BASE_URL}/products`, {
//       next: { revalidate: revalidate },
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

// export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
//   try {
//     const res = await fetch(`${BASE_URL}/products`, {
//       next: { revalidate },
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (!res.ok) {
//       console.error("Fetch failed:", res.status);
//       return [];
//     }

//     const contentType = res.headers.get("content-type");

//     if (!contentType?.includes("application/json")) {
//       console.error("API returned non JSON");
//       return [];
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Fetcher error:", error);
//     return [];
//   }
// };

import { BASE_URL } from "@/api/api";
import { ProductDetailTypes } from "@/types/products/types";

const revalidate = 60 * 60 * 24;
export const dataFetcher = async (): Promise<ProductDetailTypes[]> => {
  console.log("[dataFetcher] BASE_URL =", BASE_URL); // <-- add this

  try {
    const url = `${BASE_URL}/products`;
    console.log("[dataFetcher] Fetching:", url);

    const res = await fetch(url, {
      // next: { revalidate },
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    console.log("[dataFetcher] Response status:", res.status);
    console.log("[dataFetcher] Content-Type:", res.headers.get("content-type"));

    if (!res.ok) {
      console.error("[dataFetcher] Fetch failed:", res.status, res.statusText);
      return [];
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      console.error("[dataFetcher] Non‑JSON response, got:", contentType);
      return [];
    }

    const json = await res.json();
    console.log("[dataFetcher] Received items count:", json.length);
    return json;
  } catch (error) {
    console.error("[dataFetcher] Exception:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      url: `${BASE_URL}/products`,
    });
    return [];
  }
};
