import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

import styles from "@/templates/styles/productCart/route.module.css";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/ui/card";

const ProductCart = () => {
  return (
    <section className={styles.container}>
      <aside className={styles.container__aside}>
        <Card>
          <CardHeader>
            <div className="flex justify-between border-b-2 pb-6">
              <CardTitle>Cart</CardTitle>
              <FaBasketShopping />
            </div>
          </CardHeader>
          <CardFooter>
            <span className="text-[0.9rem] text-[#363636]">Total: </span>
          </CardFooter>
        </Card>
      </aside>

      <div></div>
    </section>
  );
};

export default ProductCart;
