"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { mockedData } from "@/api/mockedData";
import styles from "@/modules/styles/categories/route.module.css";
import { ProductDetailTypes } from "@/types/products/types";
import { Button } from "@/ui/button";

interface CategoriesProps {
  title: string;
}
const Categories = ({ title }: CategoriesProps) => {
  const data = mockedData as ProductDetailTypes[];

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const MotionButton = motion.create(Button);

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        {title}
      </h2>
      <ul className={styles.container__list}>
        {uniqueCategories.map((category, index) => (
          <li className="" key={index}>
            <MotionButton
              asChild
              className="cursor-pointer "
              variant={"outline"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={{
                  pathname: "/products",
                  query: { category },
                }}
              >
                {category}
              </Link>
            </MotionButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
