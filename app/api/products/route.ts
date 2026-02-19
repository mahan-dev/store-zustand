import connectDb from "@/helper/mongoDb";

export const GET = async () => {
  try {
    await connectDb();
  } catch (error) {
    (error);
  }


//   const res = await fetch('')


};
