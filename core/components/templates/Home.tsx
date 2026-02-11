"use client";

import { useEffect, useState } from "react";

import { filterCards } from "@/helper/filterCards";
import CardPage from "@/modules/Card";
import SideBar from "@/modules/SideBar";
import styles from "@/templates/styles/home/route.module.css";
import { ProductDetailTypes } from "@/types/products/types";

const Home = () => {
  const [range, setRange] = useState<[number, number]>([0, 1000]);
  const [category, setCategory] = useState<string>("");
  // const [filteredData, setFilteredData] = useState<ProductDetailTypes[]>(data);

  const [data, setData] = useState<ProductDetailTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi/products").then((res) =>
        res.json(),
      );
      setData(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setData(filterCards({ range, data, category }));
  }, [category, range, data]);

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
        {data.length ? (
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
