import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import scrollTopHook from "../Hooks/scrollTopHook";
import { urlFor } from "../../client";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
const SwiperSlides = ({ categorias }) => {
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

  const element = categorias.map((cat) => {
    return (
      <SwiperSlide className="group" key={cat.categoria}>
        <Link to={`/categorias/${cat.categoria}`}>
          <img
            src={urlFor(cat.imgUrl)}
            alt={cat.categoria}
            className="h-[90%] object-cover !w-full"
            onClick={scrollTopHook}
          />
        </Link>

        <div className="flex items-center justify-between">
          <p className="text-lg lg:text-xl group-hover:underline decoration-1 ">
            {cat.categoria}
          </p>
          <BsArrowRight className="mr-5 group-hover:mr-0 transition-all duration-1500 ease-in-out" />
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        slidesPerView={renderSlides()}
        spaceBetween={20}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper-center  h-[350px] lg:h-full cursor-grab "
      >
        {element}
      </Swiper>
    </>
  );
};

export default SwiperSlides;
