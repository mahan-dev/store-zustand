"use client";

import { FaListUl } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { RiDashboard3Fill } from "react-icons/ri";

import styles from "@/templates/styles/sidePanel/route.module.css";
import Link from "next/link";
import { ReactNode } from "react";

interface AdminProps {
  role?: "ADMIN" | "USER";
  children?: ReactNode;
}
const SidePanel = ({ role, children }: AdminProps) => {


  return (
    <section className="flex justify-between">
      <aside className={styles.aside}>
        <Card className="pt-4 gap-3">
          <CardHeader className="border-b">
            <div className={styles["aside__header-content"]}>
              Dashboard
              <RiDashboard3Fill className="text-[1.3rem] text-[#9D44B5]" />
            </div>
          </CardHeader>

          <CardContent className="px-4">
            <ul className={styles.aside__list}>
              {role === "ADMIN" ? (
                <li>
                  <Link href={"/dashboard/transactions"}>
                    Transactions <FaListUl />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={"/admin/myTransaction"}>
                    My transaction <FaListUl />
                  </Link>
                </li>
              )}
              <li>
                <Link href={"/dashboard/transactions"}>
                  Users <CgUserList />
                </Link>
              </li>
              <li>
                <Link href={"/admin/settings"}>
                  Settings <MdAdminPanelSettings />
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </aside>
      {children}
    </section>
  );
};

export default SidePanel;
