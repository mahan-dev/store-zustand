"use client";
import { ProductShape } from "@/types/products/types";
import Image from "next/image";

import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { titleFormatter } from "@/helper/titleFormatter";

import styles from "@/modules/styles/searchCards/route.module.css";

interface CardsProps {
  data: Omit<ProductShape, "quantity"> & {
    quantity?: number;
  };
  setDebouncedValue: Dispatch<SetStateAction<string>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

enum ApiStatus {
  Online = "online",
  Offline = "offline",
}

const imageStyles = {
  [ApiStatus.Online]: styles["image-online"],
  [ApiStatus.Offline]: styles["image-offline"],
} as const;

const SearchCards = ({
  data: cardData,
  setSearchValue,
  setDebouncedValue,
}: CardsProps) => {
  const [imageStatus, setImageStatus] = useState<string>(ApiStatus.Online);

  const router = useRouter();

  return (
    <div className="w-full bg-[#9d44b555] flex flex-col gap-2 p-2 rounded-b-xl">
      {cardData.slice(0, 2).map((item) => (
        <div
          key={item.id}
          className="flex gap-1 cursor-pointer"
          onClick={() => {
            router.push(`/product/${item.id}`);
            setDebouncedValue("");
            setSearchValue("");
          }}
        >
          {imageStatus == ApiStatus.Online ? (
            <>
              <Image
                src={item.image}
                alt={titleFormatter(item.title)}
                width={60}
                height={60}
                onError={() => setImageStatus(ApiStatus.Offline)}
              />
              <span className="text-[0.8rem]">
                {titleFormatter(item.title)}
              </span>
            </>
          ) : (
            <span className={imageStyles[imageStatus]}>Failed</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchCards;
