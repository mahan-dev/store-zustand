import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return NextResponse.json(data);
};
