import connectDb from "@/utils/mongoDb";
import Home from "@/templates/Home";
import axios from "axios";

const Page = async () => {
  await connectDb();
  return <Home />;
};

export default Page;
