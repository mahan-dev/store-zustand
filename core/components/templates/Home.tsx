import React from "react";

import Categories from "@/modules/Categories";
import SwiperSlider from "@/templates/Swiper";

const Home = () => {
  return (
    <div>
      <SwiperSlider />

      <Categories title={"Categories"} />
    </div>
  );
};

export default Home;
