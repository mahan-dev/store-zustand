import connectDb from "@/core/utils/mongoDb";

export const GET = async () => {
  try {
    await connectDb();
  } catch (error) {
    error;
  }

  //   const res = await fetch('')
};
