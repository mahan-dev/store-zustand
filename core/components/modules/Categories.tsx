import Link from "next/link";

import { mockedData } from "@/api/mockedData";
import { ProductDetailTypes } from "@/types/products/types";
import { Button } from "@/ui/button";

interface CategoriesProps {
  title: string;
}
const Categories = ({ title }: CategoriesProps) => {
  const data = mockedData as ProductDetailTypes[];

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-[#9d44b5] mb-8">{title}</h2>
      <ul className="flex justify-center gap-2.5">
        {uniqueCategories.map((category, index) => (
          <li className="" key={index}>
            <Button asChild className="cursor-pointer" variant={"outline"}>
              <Link
                href={{
                  pathname: "/products",
                  query: { category },
                }}
              >
                {category}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
