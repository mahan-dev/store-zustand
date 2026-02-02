"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import styles from "@/modules/styles/header/route.module.css";
import { Button } from "@/ui/button";

const Header = () => {
  const { total, totalItems, itemsCounter } = useShopStore();
  console.log("🛢️ ~ Header.tsx:9 -> itemsCounter: ", itemsCounter);
  console.log("🤣 ~ Header.tsx:9 -> totalItems: ", totalItems);

  return (
    <header
      className="sticky top-0 z-10 flex justify-between p-2  text-white
      w-full bg-linear-to-r from-[#9D44B5] to-[#DD76F9]"
    >
      <Button className="cursor-pointer" variant={"ghost"}>
        Sing in
      </Button>

      <div className="relative">
        <Button className="">
          <FaShoppingCart />
        </Button>
        <span className="absolute top-5 left-0">
          {total > 10 ? "10+" : total}
        </span>
      </div>
    </header>
  );
};

export default Header;
