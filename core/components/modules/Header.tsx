"use client";
import Link from "next/link";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import styles from "@/modules/styles/header/route.module.css";
import { Button } from "@/ui/button";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

import { useState } from "react";

import SearchCards from "@/modules/SearchCards";
import { toast } from "sonner";

const Header = () => {
  const { total } = useShopStore();

  const session = useSession();

  const status = session.status === "authenticated";

  const pageUrl = usePathname();

  const [searchValue, setSearchValue] = useState<string>("");

  const [search, setSearch] = useState<boolean>(false);

  const exitHandler = async () => {
    toast.success("successfully logged out", { position: "top-center" });
    await new Promise((resolver) => setTimeout(resolver, 1000));
    signOut();
  };

  const accountButton =
    session.status === "authenticated" && !pageUrl.includes("/dashboard");

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
              <li onClick={exitHandler}>Exit</li>
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

      <section className={styles.header__right}>
        <Link href={"/cart"}>
          <Button>
            <FaShoppingCart />
          </Button>
        </Link>
        <span className={styles["right__cart-counter"]}>
          {total > 10 ? "10+" : total}
        </span>

        <span
          className={styles.right__searchButton}
          onClick={() => setSearch(!search)}
        >
          <IoSearch className="text-xl" />
        </span>

        {search && (
          <SearchCards
            searchValue={searchValue}
            setSearch={setSearch}
            setSearchValue={setSearchValue}
          />
        )}
      </section>
    </header>
  );
};

export default Header;
