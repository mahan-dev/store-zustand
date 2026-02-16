import React from "react";

import Categories from "@/modules/Categories";
import OurCustomer from "@/templates/OurCustomer";
import SwiperSlider from "@/templates/Swiper";

const Home = () => {
  return (
    <div>
      <SwiperSlider />

      <Categories title={"Categories"} />
      <OurCustomer />
    </div>
  );
};

export default Home;
