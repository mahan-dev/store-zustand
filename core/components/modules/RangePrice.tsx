"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useSearchParamsMinMax } from "@/helper/searchParamsHandler";
import { Slider } from "@/ui/slider";

interface PriceProps {
  range: [number, number];
  setRange: Dispatch<SetStateAction<[number, number]>>;
}
const PriceSlider = ({ range, setRange }: PriceProps) => {
  const { SetParam } = useSearchParamsMinMax();

  const [tempPrice, setTempPrice] = useState<[number, number]>([0, 1000]);

  const valueChangeHandler = (value: [number, number]) => {
    setTempPrice(value);
  };

  const valueCommitHandler = (value: [number, number]) => {
    setRange(value);
    SetParam({ price: value });
  };

  useEffect(() => {
    setTempPrice(range);
  }, [range]);

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
        <span>${tempPrice[0]}</span>
        <span>${tempPrice[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
