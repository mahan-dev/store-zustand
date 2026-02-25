import UserModel from "@/core/models/userModel";
import { authOptions } from "@/helper/authOptions";
import connectDb from "@/utils/mongoDb";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  await connectDb();

  const session = await getServerSession(authOptions);

  const user = await UserModel.findOne({ email: session.user.email });

  if (user.role === "admin") return <div>hello admin</div>;
};

export default page;
