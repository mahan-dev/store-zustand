import SidePanel from "@/templates/SidePanel";

import { authOptions } from "@/core/helper/authOptions";
import UserModel from "@/core/models/userModel";
import connectDb from "@/core/utils/mongoDb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const layout = async ({ children }: PropsWithChildren) => {
  await connectDb();
  const session = await getServerSession(authOptions);

  const user = await UserModel.findOne({ email: session?.user.email });

  if (!session) redirect("/signup");
  const parsedRole: "ADMIN" | "USER" = JSON.parse(JSON.stringify(user?.role));
  return <SidePanel role={parsedRole}>{children}</SidePanel>;
};

export default layout;
