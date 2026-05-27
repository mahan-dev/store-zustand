"use client";
import Image from "next/image";

import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { titleFormatter } from "@/helper/titleFormatter";

import styles from "@/modules/styles/searchCards/route.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "@/core/helper/header/searchQuery";

interface CardsProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<boolean>>;
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
  searchValue,
  setSearchValue,
  setSearch,
}: CardsProps) => {
  const [imageStatus, setImageStatus] = useState<string>(ApiStatus.Online);
  const [debounceValue, setDebounceValue] = useState<string>("");
  const { data } = useQuery({
    queryKey: ["searchProduct", debounceValue],
    queryFn: () => searchQuery(debounceValue),
  });

  const router = useRouter();

  const clickHandler = (id: number) => {
    if (imageStatus === "offline") return;
    router.push(`/product/${id}`);
    setDebounceValue("");
    setSearchValue("");
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  //!test

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(searchValue), 600);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <section className={styles.container}>
      <div className={styles["container__search-input"]}>
        <div className={styles.container__input}>
          <input
            className="w-full py-1 outline-none"
            onChange={changeHandler}
            value={searchValue}
          />
          {!!searchValue.length && (
            <span
              className="cursor-pointer"
              onClick={() => {
                setSearchValue("");
                setDebounceValue("");
                setSearch(false);
              }}
            >
              close
            </span>
          )}
        </div>
        <div className={styles.input__search}>
          {data?.length ? (
            <div className={styles.card}>
              {data.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="flex gap-1 cursor-pointer"
                  onClick={() => clickHandler(item.id)}
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
          ) : (
            !!searchValue.length && <span>nothing found</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchCards;
