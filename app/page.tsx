import React from "react";

import { dataFetcher } from "@/helper/ProductFetcher";
import Home from "@/templates/Home";

export const revalidate = 1 * 60 * 60 * 24 * 30;
const page = async () => {
  const data = await dataFetcher();

  if (!data.length) return;
  return <Home data={data} />;
};

export default page;
