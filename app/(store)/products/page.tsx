export const dynamic = "force-dynamic";
import { Suspense } from "react";

import { dataFetcher } from "@/core/helper/ProductFetcher";
import Products from "@/templates/Products";
import { mockedData } from "@/core/api/mockedData";
import { ProductDetailTypes } from "@/core/types/products/types";

const page = async () => {
  // const receivedData = await dataFetcher()

  const data = mockedData as ProductDetailTypes[];

  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return (
    <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
      <Products data={JSON.parse(JSON.stringify(data))} />
    </Suspense>
  );
};

export default page;
