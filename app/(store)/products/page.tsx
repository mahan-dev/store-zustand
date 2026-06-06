import { Suspense } from "react";


import { dataFetcher } from "@/core/helper/ProductFetcher";
import Products from "@/templates/Products";
import { ProductDetailTypes } from "@/types/products/types";

const page = async() => {
  const receivedData = await dataFetcher()

  const data = receivedData as ProductDetailTypes[];

  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return (
    <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
      <Products data={data} />
    </Suspense>
  );
};

export default page;
