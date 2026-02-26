import { authOptions } from "@/core/helper/authOptions";
import UserModel, { ModelSchemaTypes } from "@/models/userModel";
import Transactions from "@/templates/Transactions";
import connectDb from "@/utils/mongoDb";
import { getServerSession } from "next-auth";

const page = async () => {
  await connectDb();

  const users: ModelSchemaTypes[] = await UserModel.find();
  const { user } = await getServerSession(authOptions);

  return <Transactions users={users} email={user.email} />;
};

export default page;
