"use client";
import { useState } from "react";

import { ProductDetailTypes } from "@/core/types/products/types";
import CardPage from "@/modules/Card";
import PriceSlider from "@/modules/RangePrice";
import styles from "@/templates/styles/home/route.module.css";
import { Card, CardHeader } from "@/ui/card";

interface HomeProps {
  data: ProductDetailTypes[];
}
const Home = ({ data }: HomeProps) => {
  return (
    <div className={styles.container}>
      <aside className="flex flex-col shrink-0 w-50">
        <Card>
          <CardHeader className="border-b ">Filter</CardHeader>
          <PriceSlider data={data} />
        </Card>
      </aside>
      <div className="flex w-full justify-center flex-wrap gap-4">
        {data.map((item, index) => (
          <CardPage key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
