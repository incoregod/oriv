import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import fio from "../assets/fio.jpg";
import pulseira from "../assets/pulseira.jpg";
import brincos from "../assets/brincos.jpg";
import anel from "../assets/anel.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay } from "swiper/modules";

import { useMediaQuery } from "react-responsive";
const SwiperSlides = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  function renderSlides() {
    if (isTabletOrMobile) {
      return 2;
    } else if (isDesktopOrLaptop) {
      return 3;
    }
    return 4;
  }

  return (
    <>
      <Swiper
        slidesPerView={renderSlides()}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper-center w-full h-full cursor-pointer "
      >
        <SwiperSlide className="group">
          <img src={fio} alt="fio" className="h-[100%] object-cover !w-full" />

          <div className="flex items-center justify-between">
            <p className="text-xl group-hover:underline decoration-1 ">Fios</p>
            <BsArrowRight className="mr-5 group-hover:mr-0 transition-all duration-1500 ease-in-out" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="group">
          <img
            src={pulseira}
            alt="Pulseiras"
            className="h-[100%]  object-cover !w-full"
          />
          <div className="flex items-center justify-between">
            <p className="text-xl group-hover:underline decoration-1 ">
              Pulseiras
            </p>
            <BsArrowRight className="mr-5 group-hover:mr-0 transition-all duration-1500 ease-in-out" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="group">
          <img
            src={brincos}
            alt="Brincos"
            className="h-[100%] object-cover !w-full"
          />
          <div className="flex items-center justify-between">
            <p className="text-xl group-hover:underline decoration-1 ">
              Brincos
            </p>
            <BsArrowRight className="mr-5 group-hover:mr-0 transition-all duration-1500 ease-in-out" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="group">
          <img
            src={anel}
            alt="Aneis"
            className=" h-[100%] object-cover !w-full"
          />
          <div className="flex items-center justify-between">
            <p className="text-xl group-hover:underline decoration-1 ">Aneis</p>
            <BsArrowRight className="mr-5 group-hover:mr-0 transition-all duration-1500 ease-in-out" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlides;
