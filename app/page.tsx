import { Suspense } from "react";

import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";
export const dynamic = "force-dynamic";
const Page = async () => {
  const data = await dataFetcher();
  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  const parsedData = data.slice(0, 20) ?? [];
  console.log("🎺 ~ page.tsx:12 -> parsedData: ", parsedData);

  return (
    <Suspense fallback={<h2 className="text-center mt-10">Loading...</h2>}>
      <Home data={parsedData} />
    </Suspense>
  );
};

export default Page;
