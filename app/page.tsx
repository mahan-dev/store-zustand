import connectDb from "@/helper/mongoDb";
import SwiperSlider from "@/templates/Swiper";

const Page = async () => {
  // await connectDb();

  return <SwiperSlider />;
};

export default Page;
