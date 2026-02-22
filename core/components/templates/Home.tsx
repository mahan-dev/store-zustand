import React from "react";

import Categories from "@/modules/Categories";
import OurCustomer from "@/templates/OurCustomer";
import SwiperSlider from "@/templates/Swiper";
import connectDb from "@/utils/mongoDb";

const Home = async () => {
  return (
    <div>
      <SwiperSlider />

      <Categories title={"Categories"} />
      <OurCustomer />
    </div>
  );
};

export default Home;
