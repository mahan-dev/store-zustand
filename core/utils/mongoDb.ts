import { connect, connections, set } from "mongoose";

const BASE_URL = process.env.MONGO_URI as string;

const connectDb = async (): Promise<void> => {
  if (connections[0].readyState) return;
  set("strictQuery", false);

  try {
    await connect(BASE_URL);
    console.log("connection succeed 👌");
  } catch (error) {
    console.log(error);
    console.log("error while connect to db");
  }
};
export default connectDb;
