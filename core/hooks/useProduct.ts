"use client";

import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "@/helper/ProductFetcher";
import { ProductDetailTypes } from "@/types/products/types";

export const UseProduct = (params: {productId: string }) => {
  const { data } = useQuery({
    queryKey: ["store fetching "],
    queryFn: dataFetcher,
  });

  let products: ProductDetailTypes[] = [];

  if (!data) return;

  if (data) return products[+params - 1];
};
