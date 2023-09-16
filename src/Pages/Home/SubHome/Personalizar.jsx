import { Link } from "react-router-dom";
import foto from "../../../assets/jonathan-sanchez-Ahxw0gICnKw-unsplash.jpg";

const Personalizar = () => {
  return (
    <div
      className="flex flex-col 
     gap-2 items-center justify-center text-center font-playfair lg:flex-row lg:justify-evenly"
    >
      <img
        className="object-cover  sm:h-[635px] lg:h-full w-[370px]  lg:w-[470px] 2xl:w-[670px]"
        src={foto}
        alt="foto-joias"
      />
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-semibold ">
          Personalizar Jóias
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl">
          Tem um pedido especial? Nós Ajudamos
        </p>
        <div className="mt-3 hover:scale-110 ease-in-out transition-all duration-300">
          <Link
            className="border-black border-[1px] py-1 px-4 bg-black text-white  md:text-xl  xl:text-2xl  "
            to={""}
          >
            Os Nossos Serviços
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Personalizar;
