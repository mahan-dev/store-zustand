"use client";

import { FaListUl } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { RiDashboard3Fill } from "react-icons/ri";

import styles from "@/templates/styles/adminPage/route.module.css";
import Link from "next/link";

interface AdminProps {
  role: "ADMIN" | "USER";
}
const AdminPage = ({ role }: AdminProps) => {
  return (
    <aside className={styles.aside}>
      <Card className="pt-4 gap-3">
        <CardHeader className="border-b">
          <div className={styles["aside__header-content"]}>
            Dashboard
            <RiDashboard3Fill className="text-[1.3rem] text-[#9D44B5]" />
          </div>
        </CardHeader>

        <CardContent>
          <ul className={styles.aside__list}>
            {role === "ADMIN" ? (
              <li>
                <Link href={"/admin/transactions"}>
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
              <Link href={"/admin/users"}>
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
  );
};

export default AdminPage;
