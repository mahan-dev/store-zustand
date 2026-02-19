"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";

import { titleFormatter } from "@/helper/titleFormatter";
import styles from "@/modules/styles/cartItems/route.module.css";
import { useShopStore } from "@/store/store";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";

const CartItems = () => {
  const { store, increment, decrement, remove } = useShopStore();

  return (
    <Card className="gap-0">
      <CardHeader className="border-b py-2">Product lists</CardHeader>
      <CardContent>
        <ul className={styles.list}>
          {store.map((item) => {
            const { id, image, title, quantity } = item;

            return (
              <li className={styles.list__items} key={id}>
                <div className={styles.image__wrapper}>
                  <Link href={`product/${id}`}>
                    <Image src={image} fill sizes="90vw" alt="product-image" />
                  </Link>
                </div>
                {quantity} x {titleFormatter(title)}
                <div className={styles.items__action}>
                  {quantity === 1 && (
                    <Button onClick={() => remove(item)}>
                      <FaTrashCan />
                    </Button>
                  )}
                  {quantity > 1 && (
                    <Button onClick={() => decrement(item)}>
                      <FaMinus />
                    </Button>
                  )}
                  {quantity >= 1 && (
                    <Button onClick={() => increment(item)}>
                      <FaPlus />
                    </Button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CartItems;
