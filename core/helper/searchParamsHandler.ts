"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchParams {
  price?: [number, number];
  category?: string;
  reset?: boolean;
}
export const useSearchParamsMinMax = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const SetParam = ({ price, category, reset }: SearchParams) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (price?.length === 2) {
      const [min, max] = price;
      params.set(`price-min`, String([min]));
      params.set(`price-max`, String([max]));
    }

    if (reset) {
      params.forEach((_, key) => {
        params.delete(key);
      });
      router.replace("/products");
      return;
    }

    if (category === "") {
      params.delete("category");
    } else if (category && category !== "") {
      params.set("category", category);
    }
    router.push(`/products?${params.toString()}`);
  };
  return { SetParam };
};
