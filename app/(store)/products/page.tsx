export const dynamic = "force-dynamic";
import { Suspense } from "react";


import { dataFetcher } from "@/core/helper/ProductFetcher";
import Products from "@/templates/Products";


const page = async() => {
  const receivedData = await dataFetcher()

  const data = receivedData;

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
