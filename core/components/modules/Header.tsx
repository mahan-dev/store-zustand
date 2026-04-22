"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import styles from "@/modules/styles/header/route.module.css";
import { Button } from "@/ui/button";

import { FaRegUser } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { total } = useShopStore();

  const session = useSession();

  const status = session.status === "authenticated";


  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        {status ? (
          <div className={styles.left__container}>
            <Button
              className={styles["header__account-icon"]}
            >
              <FaRegUser />
            </Button>
         
              <ul className={styles.left__dropdown}>
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
      </div>

      <div className="relative">
        <Link href={"/cart"}>
          <Button>
            <FaShoppingCart />
          </Button>
        </Link>
        <span className="absolute top-5 left-0">
          {total > 10 ? "10+" : total}
        </span>
      </div>
    </header>
  );
};

export default Header;
