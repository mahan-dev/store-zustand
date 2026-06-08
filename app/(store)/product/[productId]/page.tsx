import { dataFetcher } from "@/core/helper/ProductFetcher";

import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;

  const data = await dataFetcher();
  const receivedItem = data[+productId - 1];

  if (isNaN(+productId))
    return <h2 className="text-center mt-12">nothing has found</h2>;

  if (!data) return <h2>Product Not found</h2>;

  return <ProductDetail data={receivedItem} />;
};

export default ProductPage;
