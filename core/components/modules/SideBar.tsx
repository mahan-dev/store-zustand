"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";

import { filterCards } from "@/core/helper/filterCards";
import { useSearchParamsMinMax } from "@/core/helper/searchParamsHandler";
import { useFilterSearchParams } from "@/core/hooks/useFilterSearchParams";
import PriceSlider from "@/modules/RangePrice";
import SelectCategory from "@/modules/Select";
import { ProductDetailTypes } from "@/types/products/types";
import { Button } from "@/ui/button";
import { Card, CardHeader } from "@/ui/card";

interface SidebarProps {
  range: number[];
  setRange: Dispatch<SetStateAction<[number, number]>>;
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
    setRange([0, 1000]);
    console.log("working");
    filterCards({ range, category });
    SetParam({ category: "", price: [0, 1000] });
  };

  useFilterSearchParams({ setCategory, setRange });

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
        <Button
          className="mx-2 cursor-pointer"
          onClick={resetHandler}
          disabled={category === "" && range[0] === 0 && range[1] === 1000}
        >
          Reset
        </Button>
      </Card>
    </aside>
  );
};

export default SideBar;
