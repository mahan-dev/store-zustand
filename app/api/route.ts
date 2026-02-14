import { NextResponse } from "next/server";

import { ProductDetailTypes } from "@/core/types/products/types";

export const GET = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = (await res.json()) as ProductDetailTypes[];
  return NextResponse.json({ data }, { status: 200 });
};
