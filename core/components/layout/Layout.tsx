import React, { PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/sonner";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main className="min-h-screen">{children}</main>
      <Toaster />
      <Footer />
    </>
  );
};

export default Layout;
