"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchParams {
  price?: [number, number];
  category?: string;
}
export const useSearchParamsMinMax = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const SetParam = ({ price, category }: SearchParams) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (price?.length === 2) {
      const [min, max] = price;
      params.set(`price-min`, String([min]));
      params.set(`price-max`, String([max]));
    }

    if (category === "") {
      params.set("category", "all");
    } else if (category && category !== "all") {
      console.log(category);

      params.set("category", category);
    }
    router.push(`/?${params.toString()}`);
  };
  return { SetParam };
};
