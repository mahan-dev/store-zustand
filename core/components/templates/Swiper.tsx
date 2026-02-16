"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { mockedData } from "@/core/api/mockedData";
import { ProductDetailTypes } from "@/core/types/products/types";
import styles from "@/templates/styles/swiper/route.module.css";

const SwiperSlider = () => {
  const data = mockedData.slice(0, 6) as ProductDetailTypes[];

  return (
    <div className={styles.container}>
      <BsArrowLeftSquare className={styles["swiper__arrow-left"]} />
      <BsArrowRightSquare className={styles["swiper__arrow-right"]} />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: `.${styles["swiper__arrow-right"]}`,
          prevEl: `.${styles["swiper__arrow-left"]}`,
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={4}
        className="h-50"
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`${styles["swiper-slide"]} py-2`}
          >
            <div className=" relative w-40 mx-auto h-40">
              <Link href={`/product/${item.id}`}>
                <Image
                  className=""
                  src={item.image}
                  alt={"cardImage"}
                  fill
                  sizes="90vw"
                  priority
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
