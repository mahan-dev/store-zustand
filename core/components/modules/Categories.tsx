"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { mockedData } from "@/api/mockedData";
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
    <div className="flex flex-col items-center mt-16">
      <h2 className="text-[#9d44b5] mb-8 text-xl font-bold">{title}</h2>
      <ul className="flex justify-center gap-2.5">
        {uniqueCategories.map((category, index) => (
          <li className="" key={index}>
            <MotionButton
              asChild
              className="cursor-pointer "
              variant={"outline"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.2 }}
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
