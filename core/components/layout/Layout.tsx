import React, { PropsWithChildren } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/ui/button";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header
        className=" flex justify-between p-2  text-white
      w-full bg-linear-to-r from-[#9D44B5] to-[#DD76F9]"
      >
        <Button variant={"ghost"}>Sing in</Button>

        <div className="relative">
          <Button className="">
            <FaShoppingCart />
          </Button>
          <span className="absolute top-5 left-0.5">{`0`}</span>
        </div>
      </header>
      {children}
      <Toaster />
    </>
  );
};

export default Layout;
