"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useShopStore } from "@/core/store/store";
import styles from "@/modules/styles/header/route.module.css";
import { Button } from "@/ui/button";

const Header = () => {
  const { total } = useShopStore();

  return (
    <header className={styles.header}>
      <Button variant={"secondary"}>Sign in</Button>

      <div className="relative">
        <Button>
          <FaShoppingCart />
        </Button>
        <span className="absolute top-5 left-0">
          {total > 10 ? "10+" : total}
        </span>
      </div>
    </header>
  );
};

export default Header;
