"use client";

import { FaListUl } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { RiDashboard3Fill } from "react-icons/ri";

import styles from "@/templates/styles/sidePanel/route.module.css";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface AdminProps {
  role?: "ADMIN" | "USER";
  children?: ReactNode;
}
const SidePanel = ({ role, children }: AdminProps) => {
  const BASE_URL = "/dashboard/";

  const [reveal, setReveal] = useState<boolean>(false);

  return (
    <section className="flex mt-6 relative">
      <div
        className="hidden max-md:block fixed z-20 left-4 top-[7%]"
        onClick={() => setReveal(!reveal)}
      >
        {!reveal ? "open" : "close"}
      </div>
      <aside className={`${!reveal ? styles.aside : styles["aside-hidden"]} `}>
        <Card className="pt-4 gap-3 sticky top-18">
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
                  <Link href={`${BASE_URL}transactions`}>
                    Transactions <FaListUl />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={`${BASE_URL}myTransactions`}>
                    My transaction <FaListUl />
                  </Link>
                </li>
              )}
              <li>
                <Link href={`${BASE_URL}transactions`}>
                  Users <CgUserList />
                </Link>
              </li>
              <li>
                <Link href={`${BASE_URL}settings`}>
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
