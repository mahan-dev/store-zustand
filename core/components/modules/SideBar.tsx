"use client";
import React, { Dispatch, SetStateAction } from "react";

import { filterCards } from "@/core/helper/filterCards";
import { useSearchParamsMinMax } from "@/core/helper/searchParamsHandler";
import PriceSlider from "@/modules/RangePrice";
import SelectCategory from "@/modules/Select";
import { ProductDetailTypes } from "@/types/products/types";
import { Button } from "@/ui/button";
import { Card, CardHeader } from "@/ui/card";

interface SidebarProps {
  range: number[];
  setRange: Dispatch<SetStateAction<number[]>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  data: ProductDetailTypes[];
}

const SideBar = ({
  range,
  setRange,
  category,
  setCategory,
  data,
}: SidebarProps) => {
  const { SetParam } = useSearchParamsMinMax();

  const resetHandler = () => {
    setCategory("");
    filterCards({ range, category });
    SetParam([0, 1000]);
  };

  return (
    <aside className="flex flex-col shrink-0 w-50">
      <Card>
        <CardHeader className="border-b ">Filter</CardHeader>
        <PriceSlider setRange={setRange} />
        <SelectCategory
          data={data}
          category={category}
          setCategory={setCategory}
        />
        <Button className="mx-2 cursor-pointer" onClick={resetHandler}>
          Reset
        </Button>
      </Card>
    </aside>
  );
};

export default SideBar;
