"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTags } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import { titleFormatter } from "@/core/helper/titleFormatter";
import { ProductDetailTypes } from "@/core/types/products/types";
import styles from "@/templates/styles/productDetail/route.module.css";
import { Button } from "@/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/card";

interface ProductProps {
  data: Omit<ProductDetailTypes, "quantity"> & {
    quantity?: number;
  };
}

const ProductDetailPage = ({ data }: ProductProps) => {
  const { title, description, category, image } = data;

  const router = useRouter();
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__arrowBack} onClick={() => router.push("/")}>
        <Button className="shadow-sm" variant={"outline"} size={"sm"}>
          <FaArrowLeftLong className="text-2xl" />
        </Button>
      </div>
      <Card className={styles.card}>
        <CardHeader className="p-0">
          <CardTitle>{titleFormatter(title)}</CardTitle>

          <div className={styles["card__image-wrapper"]}>
            <Image src={image} fill sizes="90vw" priority alt="imageCard" />
          </div>
        </CardHeader>
        <CardDescription className="wrap-break-word">
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
