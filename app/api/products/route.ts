import connectDb from "@/helper/mongoDb";

export const GET = async () => {
  try {
    await connectDb();
  } catch (error) {
    console.log(error);
  }


//   const res = await fetch('')


};
