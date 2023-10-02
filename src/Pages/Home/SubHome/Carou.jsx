import SwiperSlides from "../../../Features/SwiperSlides";

import { useContext } from "react";
import { CategoriesContext } from "../../../Context/CategoriesProvider";

const Carou = () => {
  const { categorias } = useContext(CategoriesContext);

  return (
    <div className=" bg-white font-playfair ">
      <h1 className="text-3xl  lg:text-4xl 2xl:text-6xl mb-10 text-center sm:text-left">
        Comprar por Categoria
      </h1>

      <SwiperSlides categorias={categorias} />
    </div>
  );
};

export default Carou;
