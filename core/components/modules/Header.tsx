"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import { Button } from "@/ui/button";

const Header = () => {
  const { totalItems } = useShopStore();

  return (
    <header
      className=" sticky top-0 z-10 flex justify-between p-2  text-white
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
          {totalItems > 10 ? "10+" : totalItems}
        </span>
      </div>
    </header>
  );
};

export default Header;
