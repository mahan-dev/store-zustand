"use client";
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

import CartItems from "@/modules/CartItems";
import { useShopStore } from "@/store/store";
import styles from "@/templates/styles/productCart/route.module.css";
import { Button } from "@/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/ui/card";

const ProductCart = () => {
  const { store, total, items } = useShopStore();

  if (!store.length) return <h2>nothing found</h2>;

  return (
    <section className={styles.container}>
      <aside className={styles.container__aside}>
        <Card>
          <CardHeader className="flex justify-between border-b ">
            <CardTitle>Cart</CardTitle>
            <FaBasketShopping />
          </CardHeader>
          {total > 0 && <CardContent>Total items x {total}</CardContent>}

          <CardFooter className="flex flex-col items-start gap-4">
            <div className="text-[0.9rem] text-[#363636]">
              Total: {`${items}$`}
            </div>

            <Button className="w-full" variant={"default"}>Pay</Button>
          </CardFooter>
        </Card>
      </aside>

      <section className="w-full">
        <CartItems />
      </section>
    </section>
  );
};

export default ProductCart;
