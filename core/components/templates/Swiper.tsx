"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { breakpoints } from "@/constants/swiperBreakpoints";
import styles from "@/templates/styles/swiper/route.module.css";


import { mockedData } from "@/core/api/mockedData";

const SwiperSlider = () => {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["store fetching"],
  //   queryFn: dataFetcher,
  // });

  // const finalData = data?.length && data.slice(0, 6);
  const data = mockedData;
  const slicedData = data.slice(0, 5);

  return (
    <div className={styles.container}>
      {/* {isLoading && (
        <div className=" min-h-50 w-full flex  justify-center">
          <Loader />
        </div>
      )} */}
      {slicedData && (
        <>
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
            breakpoints={breakpoints}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {slicedData.length!! &&
              slicedData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className={`${styles["swiper-slide"]} py-2`}
                >
                  <Link href={`/product/${item.id}`}>
                    <div className=" relative w-40 mx-auto h-40">
                      <Image
                        src={item.image}
                        alt={"cardImage"}
                        fill
                        sizes="90vw"
                        priority
                        unoptimized
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
      {/* {isError && <h2>something</h2>} */}
    </div>
  );
};

export default SwiperSlider;
