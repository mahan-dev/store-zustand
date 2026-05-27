"use client";

import { FaListUl } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { RiDashboard3Fill } from "react-icons/ri";

import styles from "@/templates/styles/sidePanel/route.module.css";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@/ui/StyledComponents/MenuIcon";


interface AdminProps {
  role?: "ADMIN" | "USER";
  children?: ReactNode;
}

const SidePanel = ({ role, children }: AdminProps) => {
  const BASE_URL = "/dashboard/";

  const [reveal, setReveal] = useState<boolean>(false);
  const router = useRouter();


  return (
    <section className="flex z-10 mt-6 relative">
      <div className={styles["menu-icon"]} onClick={() => setReveal(!reveal)}>
        <MenuIcon />
      </div>
      <aside className={`${!reveal ? styles.aside : styles["aside-hidden"]} `}>
        <Card className="pt-4 gap-3  ">
          <CardHeader className="border-b">
            <div
              className={styles["aside__header-content"]}
              onClick={() => router.push("/dashboard/")}
            >
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
