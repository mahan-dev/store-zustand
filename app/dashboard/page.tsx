import { authOptions } from "@/core/helper/authOptions";
import { emailFormatter } from "@/core/helper/emailFormatter";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  const { email } = session?.user;

  return (
    <div className="text-xl mx-auto mt-4">
      welcome 👋 {email && emailFormatter(email)}
    </div>
  );
};

export default page;
