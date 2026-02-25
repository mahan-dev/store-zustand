import AdminPage from "@/templates/AdminPage";
import UserModel from "@/models/userModel";
import { authOptions } from "@/helper/authOptions";
import connectDb from "@/utils/mongoDb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Admin = async () => {
  await connectDb();

  const session = await getServerSession(authOptions);

  const user = await UserModel.findOne({ email: session.user.email });
  const role = user.role as "USER" | "ADMIN";

  if (role === "USER") redirect("/signup");

  return <AdminPage role={role} />;
};

export default Admin;
