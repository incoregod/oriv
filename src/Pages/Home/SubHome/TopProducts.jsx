import model from "../../../assets/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.jpg";
import brincos from "../../../assets/brincos.jpg";
import anel from "../../../assets/anel.jpg";
import fio from "../../../assets/fio.jpg";
import pulseira from "../../../assets/pulseira.jpg";

const TopProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center font-playfair">
      <div className="grid grid-rows-1  gap-4 gap-y-2 ">
        <h1 className="col-span-1 text-center  text-3xl ">
          Nova Época & Tendências
        </h1>
        <div className="flex flex-col text-sm text-center">
          <img className="h-full  object-cover" src={brincos} alt="brincos" />
          <p>Brincos Briliant Carol Made</p>
          <p>35€</p>
        </div>
        <div className="flex flex-col text-sm items-center justify-center">
          <img className="h-full  object-cover" src={anel} alt="anel" />
          <p>Brincos Briliant Carol Made</p>
          <p>35€</p>
        </div>
        <div className="flex flex-col text-sm items-center justify-center">
          <img className="h-full  object-cover" src={fio} alt="fio" />
          <p>Brincos Briliant Carol Made</p>
          <p>35€</p>
        </div>
        <div className="flex flex-col text-sm items-center justify-center">
          <img className="h-full  object-cover" src={pulseira} alt="pulseira" />
          <p>Brincos Briliant Carol Made</p>
          <p>35€</p>
        </div>
      </div>
      <img className="h-full object-cover" src={model} alt="modelo" />
    </div>
  );
};

export default TopProducts;
