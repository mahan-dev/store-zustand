"use client";

import React, { Dispatch, SetStateAction } from "react";

import { filterCards } from "@/helper/filterCards";
import { useSearchParamsMinMax } from "@/helper/searchParamsHandler";
import { useFilterSearchParams } from "@/hooks/useFilterSearchParams";
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
    filterCards({ range, data, category });
    SetParam({ reset: true });
  };

  useFilterSearchParams({ setCategory, setRange });

  const isDisabled = category === "" && range[0] === 0 && range[1] === 1000;

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
          disabled={isDisabled}
        >
          Reset
        </Button>
      </Card>
    </aside>
  );
};

export default SideBar;
