"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FaPlus,
  FaTrashCan,
  FaMinus,
  FaTags,
  FaHandHoldingDollar,
} from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductDetailTypes } from "@/core/types/products/types";
import { isInCart } from "@/helper/cardHelper";
import { quantityHandler } from "@/helper/quantityHandler";
import { titleFormatter } from "@/helper/titleFormatter";
import styles from "@/modules/styles/card/route.module.css";
import { useShopStore } from "@/store/store";
import { Button } from "@/ui/button";

interface CardProps {
  data: ProductDetailTypes;
}
const CardPage = ({ data }: CardProps) => {
  const { title, category, image, id, price } = data;

  const { addItem, increment, decrement, remove, store } = useShopStore();

  const quantity = quantityHandler(store, id);

  const router = useRouter();

  return (
    <Card className="w-50 relative  py-3">
      <Button
        size={"icon"}
        variant={"outline"}
        className={styles["card__detail-button"]}
        onClick={() => router.push(`/product/${id}`)}
      >
        <TbListDetails />
      </Button>
      <CardHeader className="relative">
        <div className="relative w-39 h-50 ">
          <Image src={image} alt={"cardImage"} fill sizes="90vw" priority />
        </div>

        <CardTitle className="mt-3 text-[0.9rem]">
          {titleFormatter(title)}
        </CardTitle>
        <CardDescription className={styles.card__description}>
          {category}
          <FaTags />
        </CardDescription>
      </CardHeader>
      <CardContent className={styles.card__content}>
        <div>{price}$</div>
        <FaHandHoldingDollar />
      </CardContent>

      {!isInCart(store, id) && (
        <Button
          className="mx-3 cursor-pointer rounded-lg"
          onClick={() => addItem(data)}
        >
          Add to Cart
        </Button>
      )}
      <div className={`${quantity >= 1 ? `${styles.card__footer}` : "hidden"}`}>
        {quantity === 1 && (
          <Button onClick={() => remove(data)}>
            <FaTrashCan />
          </Button>
        )}
        {quantity > 1 && (
          <Button onClick={() => decrement(data)}>
            <FaMinus />
          </Button>
        )}
        {quantity >= 1 && <span className="text-[#9d44b5]">{quantity}</span>}
        {quantity >= 1 && (
          <Button onClick={() => increment(data)}>
            <FaPlus />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default CardPage;
