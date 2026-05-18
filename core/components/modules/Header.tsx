"use client";
import Link from "next/link";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import styles from "@/modules/styles/header/route.module.css";
import { Button } from "@/ui/button";

import { FaRegUser } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

import { ChangeEvent, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "@/helper/header/searchQuery";
import SearchCards from "./searchCards";

const Header = () => {
  const { total } = useShopStore();

  const session = useSession();

  const status = session.status === "authenticated";

  const pageUrl = usePathname();

  const [searchValue, setSearchValue] = useState<string>("");
  const [debounceValue, setDebounceValue] = useState<string>("");

  const [search, setSearch] = useState<boolean>(false);

  const accountButton =
    session.status === "authenticated" && !pageUrl.includes("/dashboard");

  const { data } = useQuery({
    queryKey: ["searchProduct", debounceValue],
    queryFn: () => searchQuery(debounceValue),
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(searchValue), 600);

    return () => clearTimeout(timer);
  }, [searchValue]);

  console.log(data);

  return (
    <header className={styles.header}>
      <section className={styles.header__left}>
        {status ? (
          <div className={styles.left__container}>
            <Button className={styles["header__account-icon"]}>
              <FaRegUser />
            </Button>

            <ul className={styles.left__dropdown}>
              {accountButton && (
                <li onClick={() => redirect("/dashboard")}>Dashboard</li>
              )}
              <li onClick={() => signOut()}>Exit</li>
            </ul>
          </div>
        ) : (
          <Button variant={"secondary"} asChild>
            <Link href={"/signin"}>Sign in</Link>
          </Button>
        )}

        <Button variant={"outline"} asChild>
          <Link href={"/products"}>
            <FaShoppingBag className="text-[#9d44b5]" />
          </Link>
        </Button>
      </section>

      <section className="flex gap-2 items-center relative">
        <Link href={"/cart"}>
          <Button>
            <FaShoppingCart />
          </Button>
        </Link>
        <span className="absolute top-5 left-0 w-full">
          {total > 10 ? "10+" : total}
        </span>
        {!search && <span onClick={() => setSearch(!search)}>search</span>}
        {search && (
          <div className="relative">
            <div className="w-39 flex gap-2 items-center px-2  border-2 rounded-md">
              <input
                className="w-full  py-1 outline-none"
                onChange={changeHandler}
                value={searchValue}
              />
              {!!searchValue.length && (
                <span
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
            <div
              className={`absolute w-full backdrop-blur-2xl text-black top-11 `}
            >
              {data?.length ? (
                <SearchCards
                  data={data}
                  setSearchValue={setSearchValue}
                  setDebouncedValue={setDebounceValue}
                />
              ) : (
                !!searchValue.length && <span>nothing found</span>
              )}
            </div>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
