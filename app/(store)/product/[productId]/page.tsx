import { dataFetcher } from "@/core/helper/ProductFetcher";
import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;
  const receivedData = await dataFetcher();

  if (isNaN(+productId))
    return <h2 className="text-center mt-12">nothing has found</h2>;

  const data = receivedData[+productId - 1];

  if (!data) return;

  return <ProductDetail data={data} />;
};

export default ProductPage;
