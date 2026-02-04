"use client";
import React, { useState } from "react";

import { ProductDetailTypes } from "@/core/types/products/types";
import { Slider } from "@/ui/slider";

interface PriceProps {
  data: ProductDetailTypes[];
}
const PriceSlider = ({ data }: PriceProps) => {
  const [price, setPrice] = useState([0, 1000]);
  const [tempPrice, setTempPrice] = useState([0, 1000]);
  console.log(price);

  return (
    <div className="space-y-4 px-4">
      <h3>Price range</h3>

      <Slider
        min={0}
        max={1000}
        step={5}
        defaultValue={[0, 1000]}
        value={tempPrice}
        onValueChange={(value) => setTempPrice(value)}
        minStepsBetweenThumbs={1}
        onValueCommit={(value) => {
          setPrice(value);
        }}
      />
      <div className="flex justify-between text-muted-foreground">
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
