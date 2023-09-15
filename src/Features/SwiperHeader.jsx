import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import video from "../assets/video.mp4";
import imagem2 from "../assets/brooke-cagle-kElEigko7PU-unsplash.jpg";
import "swiper/css/navigation";
import SwiperTexts from "./SwiperTexts";
const SwiperHeader = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper !h-[782px] sm:!h-[762px]  md:!h-[727px]  "
      >
        <SwiperSlide className="relative flex items-end sm:items-end sm:justify-start justify-center font-opensans text-white font-bold ">
          <img
            className=" h-full w-screen object-cover lg:object-fill"
            src={imagem2}
            alt="foto2"
          />

          <SwiperTexts
            styles={"absolute px-3 py-10 sm:p-16 "}
            text={{
              header: "Jóias Únicas, Recordações Intemporais",
              content: "Modelos Cereja disponiveis",
              button: "Ver mais",
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center  font-opensans text-white font-bold">
          <video
            autoPlay
            muted
            loop
            className="scale-y-[4.7] -scale-x-100  sm:scale-y-[3.1]  md:scale-y-[2.3]  lg:scale-y-[1.5] xl:scale-y-100"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <SwiperTexts
            styles={
              "absolute px-3 py-10 sm:p-16  flex flex-col items-start h-full justify-end"
            }
            text={{
              header: "SEASONAL PROMOTION",
              content: "30% Desconto seleção de colares",
              button: "Comprar",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperHeader;
