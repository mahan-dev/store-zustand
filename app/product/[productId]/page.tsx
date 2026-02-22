import { mockedData } from "@/api/mockedData";
import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;

  if (isNaN(+productId))
    return <h2 className="text-center mt-12">nothing has found</h2>;
  const data = mockedData[+productId - 1];

  if (!data) return;

  return <ProductDetail data={data} />;
};

export default ProductPage;
