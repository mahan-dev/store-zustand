import { Suspense } from "react";

import { mockedData } from "@/api/mockedData";
import connectDb from "@/helper/mongoDb";
import Home from "@/templates/Home";
import { ProductDetailTypes } from "@/types/products/types";

const Page = async () => {
  // await connectDb();

  const data = mockedData as ProductDetailTypes[];

  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return (
    <Suspense>
      <Home data={data} />
    </Suspense>
  );
};

export default Page;
