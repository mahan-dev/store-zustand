"use client";
import { dataFetcher } from "@/core/helper/ProductFetcher";
import ProductDetail from "@/templates/ProductDetail";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = ({ params }: ProductProps) => {
  const { productId } = use(params);
  const { data: storeData } = useQuery({
    queryKey: ["data fetching"],
    queryFn: dataFetcher,
  });

  if (isNaN(+productId))
    return <h2 className="text-center mt-12">nothing has found</h2>;

  const data = storeData[+productId - 1];

  if (!data) return <h2>Product Not found </h2>;

  return <ProductDetail data={data} />;
};

export default ProductPage;
