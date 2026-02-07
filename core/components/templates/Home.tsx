"use client";

import { useState } from "react";

import CardPage from "@/modules/Card";
import PriceSlider from "@/modules/RangePrice";
import styles from "@/templates/styles/home/route.module.css";
import { ProductDetailTypes } from "@/types/products/types";
import { Card, CardHeader } from "@/ui/card";

interface HomeProps {
  data: ProductDetailTypes[];
}
const Home = ({ data }: HomeProps) => {
  const [range, setRange] = useState<number[]>([0, 1000]);
  console.log(range);

  const filteredData =
    range[0] > 0 || range[1] < 1000
      ? data.filter((item) => item.price >= range[0] && item.price <= range[1])
      : data;
  console.log(filteredData);

  return (
    <div className={styles.container}>
      <aside className="flex flex-col shrink-0 w-50">
        <Card>
          <CardHeader className="border-b ">Filter</CardHeader>
          <PriceSlider setRange={setRange} />
        </Card>
      </aside>
      <div className="flex w-full justify-center flex-wrap gap-4">
        {!!filteredData.length ? (
          filteredData.map((item, index) => (
            <CardPage key={index} data={item} />
          ))
        ) : (
          <h2>nothing has found</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
