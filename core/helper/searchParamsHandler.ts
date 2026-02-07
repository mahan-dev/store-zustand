"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const useSearchParamsMinMax = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const SetParam = (page: number[]) => {
    const [min, max] = page;
    console.log(searchParams);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(`price-min`, String([min]));
    params.set(`price-max`, String([max]));
    console.log(params);
    router.push(`/?${params.toString()}`);
  };
  return { SetParam };
};
