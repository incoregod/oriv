import model from "../../../assets/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.jpg";
import brincos from "../../../assets/brincos.jpg";
import anel from "../../../assets/anel.jpg";
import fio from "../../../assets/fio.jpg";
import pulseira from "../../../assets/pulseira.jpg";

const TopProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center font-playfair  ">
      <div className="grid grid-rows-1  gap-4 gap-y-2  md:grid-cols-2   ">
        <h1 className="col-span-1 md:col-span-2 text-center  text-3xl lg:text-4xl 2xl:text-6xl lg:mb-10">
          Nova Época & Tendências
        </h1>
        <div className="flex flex-col text-sm text-center  lg:text-xl">
          <img
            className="h-full  object-cover   grayscale-[70%] hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer "
            src={brincos}
            alt="brincos"
          />
          <div className="p-2 lg:p-5">
            <p>Brincos Briliant Carol Made</p>
            <p>35€</p>
          </div>
        </div>
        <div className="flex flex-col text-sm  text-center lg:text-xl  ">
          <img
            className="h-full  object-cover grayscale-[70%] hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer"
            src={anel}
            alt="anel"
          />
          <div className="p-2 lg:p-5">
            <p>Brincos Briliant Carol Made</p>
            <p>35€</p>
          </div>
        </div>
        <div className="flex flex-col text-sm  text-center lg:text-xl">
          <img
            className="h-full  object-cover  grayscale-[70%] hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer "
            src={fio}
            alt="fio"
          />
          <div className="p-2 lg:p-5">
            <p>Brincos Briliant Carol Made</p>
            <p>35€</p>
          </div>
        </div>
        <div className="flex flex-col text-sm  text-center lg:text-xl">
          <img
            className="h-full  object-cover grayscale-[70%] hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer "
            src={pulseira}
            alt="pulseira"
          />
          <div className="p-2 lg:p-5">
            <p>Brincos Briliant Carol Made</p>
            <p>35€</p>
          </div>
        </div>
      </div>
      <img className="h-full object-cover " src={model} alt="modelo" />
    </div>
  );
};

export default TopProducts;
