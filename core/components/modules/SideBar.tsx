import React, { Dispatch, SetStateAction } from "react";

import PriceSlider from "@/modules/RangePrice";
import SelectCategory from "@/modules/Select";
import { ProductDetailTypes } from "@/types/products/types";
import { Card, CardHeader } from "@/ui/card";

interface SidebarProps {
  setRange: Dispatch<SetStateAction<number[]>>;
  setCategory: Dispatch<SetStateAction<string>>;
  data: ProductDetailTypes[];
}

const SideBar = ({ setRange, data, setCategory }: SidebarProps) => {
  return (
    <aside className="flex flex-col shrink-0 w-50">
      <Card>
        <CardHeader className="border-b ">Filter</CardHeader>
        <PriceSlider setRange={setRange} />
        <SelectCategory data={data} setCategory={setCategory} />
      </Card>
    </aside>
  );
};

export default SideBar;
