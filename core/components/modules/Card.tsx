"use client";
import Image from "next/image";
import React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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

  const { addItem, store } = useShopStore();
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
        {/* <CardAction>CardAction</CardAction> */}
      </CardHeader>

      {!isInCart(store, id) && (
        <Button className="mx-2 cursor-pointer" onClick={() => addItem(data)}>
          Add to Cart
        </Button>
      )}
      {quantity === 1 && quantity}
    </Card>
  );
};

export default CardPage;
