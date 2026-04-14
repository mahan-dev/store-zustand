import { authOptions } from "@/core/helper/authOptions";
import UserModel from "@/core/models/userModel";
import { ProductDetailTypes } from "@/core/types/products/types";
import connectDb from "@/core/utils/mongoDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  try {
    await connectDb();
    const data: ProductDetailTypes = await req.json();



    const session = await getServerSession(authOptions);
    const user = await UserModel.findOne({ email: session.user.email });
    if (!user ) {
      return NextResponse.json(
        {
          status: "Failed",
          error: "you don't have access to this part",
        },
        { status: 403 },
      );
    }

    const posts = await UserModel.updateOne(
      { email: session.user.email },
      {
        $push: {
          transactions: {
            $each: data.data as ProductDetailTypes[],
          },
        },
      },
    );

    return NextResponse.json(
      {
        status: "success",
        message: "added successfully",
        data: posts,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("something went wrong", error);
    return NextResponse.json(
      { status: "Failed", error: "error while connecting to db" },
      { status: 500 },
    );
  }
};
