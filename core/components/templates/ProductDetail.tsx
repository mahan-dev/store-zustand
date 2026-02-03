import React from "react";

import { ProductDetailTypes } from "@/core/types/products/types";

interface productProps {
  data: ProductDetailTypes;
  id: string;
}
const ProductDetail = ({ id }: productProps) => {
  return <div>
    {id}
  </div>;
};

export default ProductDetail;
