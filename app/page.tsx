import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";

const Page = async () => {
  const data = await dataFetcher();
  if (!data.length) {
    return <h2 className="text-center mt-10">No data has found</h2>;
  }

  return <Home data={data} />;
};

export default Page;
