import { productFetcher } from "@/core/helper/productPage";
import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;

  const fetchedProduct = await productFetcher(productId);
  if (!fetchedProduct) return;

  return <ProductDetail data={fetchedProduct} id={productId} />;
};

export default ProductPage;
