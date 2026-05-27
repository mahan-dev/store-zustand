import { authOptions } from "@/core/helper/authOptions";
import UserModel from "@/core/models/userModel";
import { hashedPassword, verifyPassword } from "@/core/utils/auth";
import connectDb from "@/utils/mongoDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface RequestForm {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export const PATCH = async (req: Request) => {
  try {
    await connectDb();

    const res = (await req.json()) as RequestForm;

    const { email, currentPassword, newPassword } = res;

    const session = await getServerSession(authOptions);


    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: "please enter to your account",
        },
        { status: 401 },
      );
    const user = await UserModel.findOne({ email: session?.user.email });

    if (!user)
      return NextResponse.json(
        {
          status: "Failed",
          error: "account has not found !",
        },
        { status: 404 },
      );

    const isPassword = await verifyPassword(currentPassword, user.password);

    if (!isPassword)
      return NextResponse.json(
        { status: "Failed", error: "email or pass is incorrect" },
        { status: 400 },
      );

    if (email !== session.user.email)
      return NextResponse.json(
        { status: "Failed", error: "email or pass is incorrect" },
        { status: 400 },
      );

    const hashedNewPassword = await hashedPassword(newPassword);
    user.password = hashedNewPassword;
    await user.save();

    return NextResponse.json(
      { status: "success", message: "success" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: "Failed", error: "something went wrong" },
      { status: 500 },
    );
  }
};
