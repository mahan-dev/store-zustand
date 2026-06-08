import { PropsWithChildren, useEffect, useState } from "react";

import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Provider from "@/provider/Provider";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <h2 className="mx-auto"> loading...</h2>
      ) : (
        <Provider>
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </Provider>
      )}
    </>
  );
};

export default Layout;
