import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    console.log("working");
    return NextResponse.json({ status: "Success", message: "success got " });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ status: "Error", error: "Failed" });
  }
};
