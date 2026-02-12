import { Suspense } from "react";

import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";
export const dynamic = "force-dynamic";
const Page = async () => {
  const data = await dataFetcher();
  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return (
    <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
      <Home data={JSON.parse(JSON.stringify(data))} />
    </Suspense>
  );
};

export default Page;
