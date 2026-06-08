import { BASE_URL, dataFetcher } from "@/core/helper/ProductFetcher";

import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;

  const data = await dataFetcher();
  if (!data.length) return <h2>Product Not found</h2>;
  const receivedItem = data[+productId - 1];

  const res = await fetch(`${BASE_URL}products`, {
    cache: "no-store",
  });

  console.log("status:", res.status);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  if (isNaN(+productId))
    return <h2 className="text-center mt-12">nothing has found</h2>;

  return <ProductDetail data={receivedItem} />;
};

export default ProductPage;
