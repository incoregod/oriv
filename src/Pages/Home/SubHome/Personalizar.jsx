import { Link } from "react-router-dom";
import foto from "../../../assets/jonathan-sanchez-Ahxw0gICnKw-unsplash.jpg";
import { Parallax } from "react-scroll-parallax";

const Personalizar = () => {
  return (
    <div
      className="flex flex-col 
     gap-2 items-center justify-center text-center font-playfair lg:flex-row lg:justify-evenly "
    >
      <img
        className="object-cover h-[635px]  lg:h-full w-[370px]  lg:w-[570px] 2xl:w-[670px] px-5"
        src={foto}
        alt="foto-joias"
      />
      <Parallax translateX={[10, 0]} rotateZ={5}>
        <div className="flex flex-col  lg:border-black lg:px-10 lg:py-20 lg:border-[1px]">
          <h1 className="text-3xl md:text-4xl 2xl:text-6xl ">
            Personalizar Jóias
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl ">
            Tem um pedido especial? Nós Ajudamos
          </p>
          <div className="mt-2 lg:mt-10">
            <Link
              className="border-black border-[1px] py-1 px-4 xl:py-2 xl:px-6 bg-black text-white  md:text-xl  xl:text-xl hover:bg-white hover:text-gray-950 ease-in-out transition-all duration-300 "
              to={"/servicos"}
            >
              Os Nossos Serviços
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Personalizar;
