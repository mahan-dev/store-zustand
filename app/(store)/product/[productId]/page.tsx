import { BASE_URL, dataFetcher, dataFetcher2 } from "@/core/helper/ProductFetcher";

import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;

  const data = await dataFetcher2();
  if (!data.length)
    return <h2 className="w-fit mx-auto mt-12">Product Not found</h2>;
  const receivedItem = data[2];

  const res = await fetch(`${BASE_URL}products`, {
    cache: "no-store",
  });

  console.log("status:", res.status);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  if (isNaN(+productId))
    return <h2 className="w-fit mx-auto mt-12">nothing has found</h2>;

  return <ProductDetail data={receivedItem} />;
};

export default ProductPage;
