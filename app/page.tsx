import { Suspense } from "react";

import Home from "@/templates/Home";

const Page = async () => {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
};

export default Page;
