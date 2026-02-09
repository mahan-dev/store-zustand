"use client";

import { useState } from "react";

import { filterCards } from "@/helper/filterCards";
import CardPage from "@/modules/Card";
import SideBar from "@/modules/SideBar";
import styles from "@/templates/styles/home/route.module.css";
import { ProductDetailTypes } from "@/types/products/types";

interface HomeProps {
  data: ProductDetailTypes[];
}
const Home = ({ data }: HomeProps) => {
  const [range, setRange] = useState<[number, number]>([0, 1000]);
  const [category, setCategory] = useState<string>("");

  const filteredData = filterCards({ range, data, category });

  return (
    <div className={styles.container}>
      <SideBar
        range={range}
        setRange={setRange}
        category={category}
        setCategory={setCategory}
        data={data}
      />
      <div className="flex w-full justify-center flex-wrap gap-4">
        {!!data.length ? (
          data.map((item, index) => (
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
