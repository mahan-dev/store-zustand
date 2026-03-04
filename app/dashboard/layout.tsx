import AdminPage from "@/core/components/templates/AdminPage";
import { authOptions } from "@/core/helper/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signup");

  return <AdminPage>{children}</AdminPage>;
};

export default layout;
