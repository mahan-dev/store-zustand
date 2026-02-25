import { PropsWithChildren } from "react";

import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Provider from "@/core/providers/Provider";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Provider>
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </Provider>
    </>
  );
};

export default Layout;
