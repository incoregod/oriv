import { Link } from "react-router-dom";
import SearchCartIcons from "./SearchCartIcons";
import { FaTimes } from "react-icons/fa";

import NavFooter from "./NavFooter";

const NavLinks = ({ type, handleSideBar }) => {
  const style = !type
    ? "flex items-center justify-center gap-5 mr-auto md:gap-10 lg:text-[0.9rem] lg:gap-16 xl:gap-24 2xl:gap-32"
    : "flex flex-col h-screen absolute top-0 left-0 w-60 bg-white justify-start items-start gap-10  z-50 text-gray-950";
  return (
    <div
      className={`flex text-xs justify-center  text-white font-opensans ${
        !type && "mt-5"
      } `}
    >
      <div className={style}>
        <div className="sm:hidden border-b w-full border-opacity-50 border-gray-400 h-15 p-5 ">
          <FaTimes
            onClick={handleSideBar}
            className="text-lg  cursor-pointer"
          />
        </div>
        <Link
          className={
            type &&
            "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
          }
          to={"/colecoes"}
        >
          {" "}
          Coleções
        </Link>
        <Link
          className={
            type &&
            "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
          }
          to={"/mulher"}
        >
          {" "}
          Mulher
        </Link>
        <Link
          className={
            type &&
            "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
          }
          to={"/sobre"}
        >
          {" "}
          Sobre Mim
        </Link>
        <Link
          className={
            type &&
            "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
          }
          to={"/servicos"}
        >
          {" "}
          Serviços
        </Link>
        <Link
          className={
            type &&
            "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
          }
          to={"/guia"}
        >
          {" "}
          Guia De Compra
        </Link>
        <Link
          className={
            type &&
            "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
          }
          to={"/contactos"}
        >
          {" "}
          Contactos
        </Link>
        {type && <NavFooter />}
      </div>

      {!type && <SearchCartIcons />}
    </div>
  );
};

export default NavLinks;
