"use client";
import Image from "next/image";
import React from "react";
import { FaTrashCan } from "react-icons/fa6";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { isInCart } from "@/core/helper/cardHelper";
import { quantityHandler } from "@/core/helper/quantityHandler";
import { titleFormatter } from "@/core/helper/titleFormatter";
import { useShopStore } from "@/core/store/store";
import { ProductDetail } from "@/core/types/products/types";
import { Button } from "@/ui/button";

interface CardProps {
  data: ProductDetail;
}
const CardPage = ({ data }: CardProps) => {
  const { title, description, category, image, id } = data;

  const { addItem, increment, decrement, remove, getItemsCounter, store } =
    useShopStore();

  console.log(getItemsCounter());
  const quantity = quantityHandler(store, id);

  return (
    <Card className="w-50 py-2">
      <CardHeader>
        <div className="relative w-39 h-50 ">
          <Image
            src={image}
            alt={"cardImage"}
            fill
            sizes="90vw"
            priority
          ></Image>
        </div>

        <CardTitle className="mt-3 text-[0.9rem]">
          {titleFormatter(title)}
        </CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>

      {!isInCart(store, id) && (
        <Button className="mx-2 cursor-pointer" onClick={() => addItem(data)}>
          Add to Cart
        </Button>
      )}
      <div
        className={`${quantity >= 1 ? "flex justify-center items-center gap-2 mx-3 " : "hidden"}`}
      >
        {quantity === 1 && (
          <Button onClick={() => remove(data)}>
            <FaTrashCan />
          </Button>
        )}
        {quantity > 1 && <Button onClick={() => decrement(data)}>-</Button>}
        {quantity >= 1 && quantity}
        {quantity >= 1 && <Button onClick={() => increment(data)}>+</Button>}
      </div>
    </Card>
  );
};

export default CardPage;
