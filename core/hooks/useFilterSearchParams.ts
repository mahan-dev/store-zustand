"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface useFilterSearchParamsProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export const useFilterSearchParams = ({
  setCategory,
  setRange,
}: useFilterSearchParamsProps) => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";

  const categoryParam = searchParams.get("category") === "" ? "" : category;
  const minParam = Number(searchParams.get("price-min")) || 0;
  const maxParam = Number(searchParams.get("price-max")) || 1000;

  useEffect(() => {
    setCategory((prev) => (prev === categoryParam ? prev : categoryParam));
    setRange((prev) =>
      prev[0] === minParam && prev[1] === maxParam
        ? prev
        : [minParam, maxParam],
    );
  }, [setCategory, setRange, categoryParam, minParam, maxParam]);
};
