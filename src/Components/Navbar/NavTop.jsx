import { BsPerson, BsGlobe } from "react-icons/bs";
import { PiMapPinLight } from "react-icons/pi";
import IconsSmall from "../IconsSmall";
const NavTop = () => {
  return (
    <div className="max-sm:hidden flex items-center  font-opensans text-white text-xs mb-3">
      <BsGlobe className="mr-1" />
      <p className="mr-5">Portugal | pt</p>
      <PiMapPinLight className="mr-2 text-[16px]" />
      <p className="mr-auto cursor-pointer">Loja</p>
      <div className="flex items-center gap-1">
        <BsPerson />
        <p className="cursor-pointer"> Iniciar sessão</p>
        <p>|</p>
        <p className="cursor-pointer">Efetuar registo</p>
        <IconsSmall type={"heart"} color={"white"} />
      </div>
    </div>
  );
};

export default NavTop;
