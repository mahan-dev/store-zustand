import { dataFetcher } from "@/core/helper/ProductFetcher";
import { UseProduct } from "@/core/hooks/useProduct";
import { ProductDetailTypes } from "@/core/types/products/types";
import ProductDetail from "@/templates/ProductDetail";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;
  

  const fetchedData = async (): Promise<ProductDetailTypes[]> => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  const data = await fetchedData();
  const receivedItem = data[+productId - 1];

  if (isNaN(+productId))
    return <h2 className="text-center mt-12">nothing has found</h2>;

  // const data = UseProduct(JSON.parse(JSON.stringify(params)));

  if (!data) return <h2>Product Not found</h2>;

  return <ProductDetail data={receivedItem} />;
};

export default ProductPage;
