"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { TbShoppingCartX } from "react-icons/tb";

import { payHandler } from "@/helper/payHandler";
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

export const CartNotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.notfound}>
      <h2 className={styles.notfound__title}>
        No item has found <TbShoppingCartX className="text-[1.3rem] " />
      </h2>
      <Button
        className="mt-4 cursor-pointer"
        variant={"outline"}
        onClick={() => router.push("/")}
      >
        Back shopping
      </Button>
    </div>
  );
};

const ProductCart = () => {
  const { store, total, items, resetStore } = useShopStore();
  const router = useRouter();

  if (!store.length) return <CartNotFound />;

  return (
    <section className={styles.container}>
      <aside className={styles.container__aside}>
        <Card>
          <CardHeader className={styles.aside__header}>
            <CardTitle>Cart</CardTitle>
            <FaBasketShopping />
          </CardHeader>
          {total > 0 && <CardContent>Total items x {total}</CardContent>}

          <CardFooter className={styles.aside__footer}>
            <div className="text-[0.9rem] text-[#363636]">
              Total: {`${items}$`}
            </div>

            <Button
              className="w-full cursor-pointer"
              variant={"default"}
              onClick={() => payHandler({ resetStore, router })}
            >
              Pay
            </Button>
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
