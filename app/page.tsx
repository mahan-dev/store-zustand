import React, { Suspense } from "react";

import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";

const page = async () => {
  const data = await dataFetcher();

  if (!data.length)
    return <h2 className="text-center mt-10">No data has found</h2>;
  return (
    // <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
    <Home data={data} />
    // </Suspense>
  );
};

export default page;
