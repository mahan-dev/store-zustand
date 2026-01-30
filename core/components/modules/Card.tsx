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
import { titleFormatter } from "@/core/helper/titleFormatter";
import { useShopStore } from "@/core/store/store";
import { ProductDetail } from "@/core/types/products/types";
import { Button } from "@/ui/button";

interface CardProps {
  data: ProductDetail;
}
const CardPage = ({ data }: CardProps) => {
  const { title, description, category, image } = data;

  const { addItem, store } = useShopStore();

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

      <Button className="mx-2 cursor-pointer" onClick={() => addItem(data)}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default CardPage;
