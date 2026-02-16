"use client";

import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";

import { filterCards } from "@/helper/filterCards";
import CardPage from "@/modules/Card";
import SideBar from "@/modules/SideBar";
import styles from "@/templates/styles/products/route.module.css";
import { ProductDetailTypes } from "@/types/products/types";
interface HomeProps {
  data: ProductDetailTypes[];
}
const Products = ({ data }: HomeProps) => {
  const [range, setRange] = useState<[number, number]>([0, 1000]);
  const [category, setCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<ProductDetailTypes[]>(data);

  const clickHandler = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    setFilteredData(filterCards({ range, data, category }));
  }, [category, range, data]);

  return (
    <div className={styles.container}>
      <div className={styles.container__sidebar}>
        <div className={styles.sidebar__filter} onClick={clickHandler}>
          <FaFilter />
        </div>
        <SideBar
          range={range}
          setRange={setRange}
          category={category}
          setCategory={setCategory}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={data}
        />
      </div>
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

export default Products;
