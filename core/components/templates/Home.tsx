"use client";

import { useEffect, useState } from "react";

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
  const [filteredData, setFilteredData] = useState<ProductDetailTypes[]>(data);

  // const filteredData = filterCards({ range, data, category });
  useEffect(() => {
    setFilteredData(filterCards({range,data, category}))

  },
   [category, range, data])

  return (
    <div className={styles.container}>
      <SideBar
        range={range}
        setRange={setRange}
        category={category}
        setCategory={setCategory}
        data={data}
      />
      <div className={styles.cards}>
        {filteredData.length ? (
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
