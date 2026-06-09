import Categories from "@/modules/Categories";
import OurCustomer from "@/templates/OurCustomer";
import SwiperSlider from "@/templates/Swiper";

const Home = () => {
  return (
    <>
      <SwiperSlider />
      <Categories title={"Categories"} />
      <OurCustomer />
    </>
  );
};

export default Home;
