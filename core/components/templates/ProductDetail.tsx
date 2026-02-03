"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTags } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import { titleFormatter } from "@/core/helper/titleFormatter";
import { ProductDetailTypes } from "@/core/types/products/types";
import styles from "@/templates/styles/productDetail/route.module.css";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/card";
interface ProductPros {
  data: ProductDetailTypes;
}

const ProductDetailPage = ({ data }: ProductPros) => {
  const { title, description, category, image } = data;

  const router = useRouter();
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__arrowBack} onClick={() => router.push("/")}>
        <FaArrowLeftLong className="text-2xl" />
      </div>
      <Card className={styles.card}>
        <CardHeader className="p-0">
          <CardTitle>{titleFormatter(title)}</CardTitle>

          <div className={styles["card__image-wrapper"]}>
            <Image src={image} fill sizes="90vw" priority alt="imageCard" />
          </div>
        </CardHeader>
        <CardDescription>
          <div className={styles.card__description}>
            {category}
            <FaTags />
          </div>
          {description}
        </CardDescription>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
