"use client";

import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

import { filterCards } from "@/helper/filterCards";
import { useSearchParamsMinMax } from "@/helper/searchParamsHandler";
import { useFilterSearchParams } from "@/hooks/useFilterSearchParams";
import PriceSlider from "@/modules/RangePrice";
import SelectCategory from "@/modules/Select";
import styles from "@/modules/styles/sidebar/route.module.css";
import { ProductDetailTypes } from "@/types/products/types";
import { Button } from "@/ui/button";
import { Card, CardHeader } from "@/ui/card";

interface SidebarProps {
  range: [number, number];
  setRange: Dispatch<SetStateAction<[number, number]>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: ProductDetailTypes[];
}

const SideBar = ({
  range,
  setRange,
  category,
  setCategory,
  isOpen,
  setIsOpen,
  data,
}: SidebarProps) => {
  const { SetParam } = useSearchParamsMinMax();

  const resetHandler = () => {
    setCategory("");
    setRange([0, 1000]);
    filterCards({ range, data, category });
    SetParam({ reset: true });
  };

  const closeHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useFilterSearchParams({ setCategory, setRange });

  const isDisabled = category === "" && range[0] === 0 && range[1] === 1000;

  return (
    <aside className={isOpen ? styles["sidebar-active"] : styles.sidebar}>
      <Card>
        <CardHeader className="border-b relative py-1!">
          Filter
          {isOpen && (
            <IoClose
              onClick={closeHandler}
              className="text-red-500 text-2xl absolute -top-9 right-0 "
            />
          )}
        </CardHeader>
        <PriceSlider range={range} setRange={setRange} />
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
