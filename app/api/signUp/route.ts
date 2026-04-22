import UserModel from "@/models/userModel";
import { hashedPassword } from "@/utils/auth";
import connectDb from "@/utils/mongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { email, password } = await req.json();
    console.log(email);

    const user = await UserModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          status: "Failed",
          error: "user already exists !",
        },
        { status: 422 },
      );
    }

    const hashPassword = await hashedPassword(password);

    const newUser = await UserModel.create({
      email: email,
      password: hashPassword,
      role: "USER",
    });

    return NextResponse.json(
      { status: "Success", message: "succeed", data: newUser },
      { status: 200 },
    );
  } catch (error) {
    console.log("something went wrong");
    return NextResponse.json(
      { status: "Failed", message: "Failure" },
      { status: 500 },
    );
  }
};
