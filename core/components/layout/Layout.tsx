import React, { PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/sonner";
import Header from "@/modules/Header";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Toaster />
    </>
  );
};

export default Layout;
