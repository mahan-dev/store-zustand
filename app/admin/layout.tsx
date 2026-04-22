import React from "react";
import UserModel from "@/models/userModel";
import { authOptions } from "@/helper/authOptions";
import connectDb from "@/utils/mongoDb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SidePanel from "@/templates/SidePanel";

interface AdminProps {
  children: React.ReactNode;
}
const Admin = async ({ children }: AdminProps) => {
  await connectDb();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");
  const user = await UserModel.findOne({ email: session.user.email });

  const role = user.role as "USER" | "ADMIN";

  if (role === "USER") redirect("/signup");

  return (
    <SidePanel role={JSON.parse(JSON.stringify(role))}>{children}</SidePanel>
  );
};

export default Admin;
