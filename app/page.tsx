import React from "react";

import { dataFetcher } from "@/core/helper/ProductFetcher";
import Home from "@/templates/Home";

const page = async () => {
  const data = await dataFetcher();

  if (!data.length) return;
  return <Home data={data} />;
};

export default page;
