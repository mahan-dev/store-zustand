import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";

export const dynamic = "force-dynamic";

const page = async () => {
  const data = await dataFetcher();

  if (!data.length)
    return <h2 className="text-center mt-10">No data has found</h2>;
  return <Home data={data} />;
};

export default page;
