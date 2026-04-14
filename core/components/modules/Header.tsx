"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import styles from "@/modules/styles/header/route.module.css";
import { Button } from "@/ui/button";
import { useSession } from "next-auth/react";

const Header = () => {
  const { total } = useShopStore();

  const session = useSession();

  const status = session.status === "authenticated";

  return (
    <header className={styles.header}>
      <div className="flex gap-2">
        {status ? (
          <Button className="border hover:opacity-70">Account</Button>
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
