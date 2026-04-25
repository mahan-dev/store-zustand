import Transactions from "@/templates/Transactions";
import { authOptions } from "@/helper/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import UserModel, { ModelSchemaTypes } from "@/core/models/userModel";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user: ModelSchemaTypes = await UserModel.findOne({
    email: session.user.email,
  });
  console.log(user);

  return <Transactions users={[user]} email={session.user.email} />;
};

export default page;
