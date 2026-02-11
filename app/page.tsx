// app/page.tsx
import { ProductDetailTypes } from "@/core/types/products/types";
import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";



const Page = async () => {
  let data: ProductDetailTypes[] = [];
  try {
    data = await dataFetcher();
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  if (!data.length) {
    return <h2 className="text-center mt-10">No products found</h2>;
  }

  return <Home data={data} />;
};

export default Page;
