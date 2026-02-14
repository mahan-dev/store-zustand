import { Suspense } from "react";

import { ProductDetailTypes } from "@/core/types/products/types";
// import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";
export const dynamic = "force-dynamic";
const Page = async () => {
  const data: ProductDetailTypes[] = await fetch(
    "https://fakestoreapi.com/products",
    {
      method: "GET",
    },
  ).then((res) => res.json());

  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return (
    <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
      <Home data={data} />
    </Suspense>
  );
};

export default Page;
