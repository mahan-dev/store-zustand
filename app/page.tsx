import connectDb from "@/utils/mongoDb";
import Home from "@/templates/Home";

const Page = async () => {
  await connectDb();
  return <Home />;
};

export default Page;
