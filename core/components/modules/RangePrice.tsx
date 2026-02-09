"use client";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useSearchParamsMinMax } from "@/helper/searchParamsHandler";
import { Slider } from "@/ui/slider";

interface PriceProps {
  setRange: Dispatch<SetStateAction<[number, number]>>;
  
}
const PriceSlider = ({ setRange }: PriceProps) => {
  const [price, setPrice] = useState([0, 1000]);
  const [tempPrice, setTempPrice] = useState([0, 1000]);

  const searchParams = useSearchParams();

  const { SetParam } = useSearchParamsMinMax();

  const valueChangeHandler = (value: [number, number]) => {
    setTempPrice(value);
    setPrice(value);
  };

  const valueCommitHandler = (value: [number, number]) => {
    setPrice(value);
    setRange(value);
    SetParam({ price: value });
  };

  useEffect(() => {
    const minPrice = Number(searchParams.get("price-min")) || 0;
    const maxPrice = Number(searchParams.get("price-max")) || 1000;

    setTempPrice([minPrice, maxPrice]);
    setPrice([minPrice, maxPrice]);
  }, [searchParams]);

  return (
    <div className="space-y-4 px-4">
      <h3>Price range</h3>

      <Slider
        min={0}
        max={1000}
        step={5}
        value={tempPrice}
        onValueChange={valueChangeHandler}
        onValueCommit={valueCommitHandler}
      />
      <div className="flex justify-between text-muted-foreground">
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
