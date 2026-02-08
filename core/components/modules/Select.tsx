import React, { Dispatch } from "react";

import { filterCards } from "@/helper/filterCards";
import { ProductDetailTypes } from "@/types/products/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

interface SelectCategoryProps {
  data?: ProductDetailTypes[];
  setCategory: Dispatch<React.SetStateAction<string>>;
}
const SelectCategory = ({ data, setCategory }: SelectCategoryProps) => {
  const changeHandler = (value: string) => {
    setCategory(value);
    filterCards({ category: value, data });
  };

  return (
    <div className="px-2">
      <Select onValueChange={changeHandler}>
        <SelectTrigger className="w-45 cursor-pointer">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
       <SelectContent className="shadow-lg shadow-purple-200">

          <SelectGroup className="**:[[role=option]]:cursor-pointer">
            <SelectItem value="men's clothing">men&apos;s clothing</SelectItem>
            <SelectItem value="women's clothing">
              women&apos;s clothing
            </SelectItem>
            <SelectItem value="electronics">electronics</SelectItem>
            <SelectItem value="jewelery">jewelery</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategory;
