import connectDb from "@/core/utils/mongoDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    console.log("working");

    return NextResponse.json(
      { status: "Success", message: "succeed" },
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
