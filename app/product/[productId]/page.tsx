import { productFetcher } from "@/core/helper/productPage";
import ProductDetail from "@/templates/ProductDetail";

export const dynamic = "force-dynamic";
interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;

  const fetchedProduct = await productFetcher(productId);
  if (!fetchedProduct) return;

  return <ProductDetail data={fetchedProduct} />;
};

export default ProductPage;
