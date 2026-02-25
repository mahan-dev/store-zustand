import { Suspense } from "react";

import { mockedData } from "@/api/mockedData";
import Products from "@/templates/Products";
import { ProductDetailTypes } from "@/types/products/types";

const page = () => {
  const data = mockedData as ProductDetailTypes[];

  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return (
    <Suspense>
      <Products data={data} />
    </Suspense>
  );
};

export default page;
