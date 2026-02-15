"use client";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@/templates/styles/swiper/route.module.css";
import { Button } from "@/ui/button";

const SwiperSlider = () => {
  return (
    <div className="relative">
      <BsArrowLeftSquare className="custom-prev text-2xl mx-4 text-black cursor-pointer  p-0 absolute left-2 top-1/2 -translate-y-1/2 z-10" />
      <BsArrowRightSquare className="custom-next text-2xl mx-4 text-black cursor-pointer  p-0 absolute right-2 top-1/2 -translate-y-1/2 z-10" />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={3}
        className="h-100"
        loop={true}
        //   autoplay={{
        //     delay: 1500,
        //     disableOnInteraction: false,
        //   }}
      >
        <SwiperSlide className={styles["swiper-slide"]}>1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>2</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>3</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>4</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>5</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>6</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
