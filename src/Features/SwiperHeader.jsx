import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import imagem from "../assets/harper-sunday-uRuF9ABj0NY-unsplash.jpg";
import video from "../assets/video.mp4";
import "swiper/css/navigation";
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
        className="mySwiper  md:!h-[760px]  "
      >
        <SwiperSlide className="relative flex items-center sm:items-end sm:justify-start justify-center font-opensans text-white font-bold  ">
          <video
            autoPlay
            muted
            loop
            className="scale-y-[3.1] scale-x-[2] sm:scale-y-[3.6] sm:scale-x-[1.3] md:scale-x-[1] md:scale-y-[2.5] lg:scale-x-100 lg:scale-y-[1.65] xl:scale-y-110  2xl:scale-x-100 2xl:scale-y-100"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute sm:p-16  ">
            <h1 className="text-3xl flex-wrap sm:text-4xl ">
              {" "}
              SEASONAL PROMOTION
            </h1>
            <p className=" text-md ">30% Desconto seleção de colares</p>
            <button className="mt-5   px-6 py-1 sm:px-8 sm:py-2 border-white border-2 hover:scale-110 hover:bg-black hover:border-gray-800 transition-all ease-in-out duration-300 sm:text-xl">
              Comprar
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center sm:items-end sm:justify-start justify-center font-opensans text-white font-bold ">
          <img
            className="h-screen w-screen object-cover lg:object-fill "
            src={imagem}
            alt="foto1"
          />
          <div className="absolute sm:p-16  ">
            <h1 className="text-3xl flex-wrap sm:text-4xl ">
              {" "}
              Jóias Únicas, Recordações Intemporais
            </h1>
            <p className=" text-md ">Modelos Cereja disponiveis</p>
            <button className="mt-5   px-6 py-1 sm:px-8 sm:py-2 border-white border-2 hover:scale-110 hover:bg-black hover:border-gray-800 transition-all ease-in-out duration-300 sm:text-xl">
              Ver mais
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperHeader;
