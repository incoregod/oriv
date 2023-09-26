import { BsChevronDown, BsFillGridFill, BsChevronUp } from "react-icons/bs";

const SideBarMain = ({ filtroOpen, handleFiltro }) => {
  return (
    <div>
      <div className="flex p-5 gap-1 justify-center items-center">
        <h1 className="mr-auto">Mulher</h1>
        <span>Filtrar</span>
        {filtroOpen ? (
          <BsChevronUp
            className="text-xs cursor-pointer"
            onClick={handleFiltro}
          />
        ) : (
          <BsChevronDown
            className="text-xs cursor-pointer"
            onClick={handleFiltro}
          />
        )}
        <BsFillGridFill className="ml-5" />
      </div>
      <hr className="w-[97%] m-auto" />
    </div>
  );
};

export default SideBarMain;
