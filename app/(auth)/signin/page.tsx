import { authOptions } from "@/core/helper/authOptions";
import UserModel, { ModelSchemaTypes } from "@/core/models/userModel";
import AuthFormRegister from "@/templates/AuthFormRegister";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  let user: ModelSchemaTypes | null = null;
  if (session) {
    user = await UserModel.findOne({ email: session.user.email });
  }
  if (session && user?.role === "ADMIN") redirect("/adminPanel");
  else if (session && user?.role === "USER") redirect("/userPanel");

  return <AuthFormRegister title={"Sign In"} rePassword={false} />;
};

export default SignInPage;
