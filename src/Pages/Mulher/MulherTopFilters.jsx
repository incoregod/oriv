import {
  BsChevronDown,
  BsFillGridFill,
  BsChevronUp,
  BsFillFunnelFill,
} from "react-icons/bs";

const MulherTopFilters = ({
  filtroOpen,
  handleFiltro,
  sortOptions,
  handleSmDevicesFilter,
}) => {
  return (
    <div>
      <div className="flex p-5 gap-1 justify-center items-center relative">
        <h1 className="mr-auto">Mulher</h1>
        <span>Filtrar</span>
        {filtroOpen ? (
          <>
            <div>
              <BsChevronUp
                className="text-xs cursor-pointer"
                onClick={handleFiltro}
              />
            </div>
            <div className="absolute  z-40 bg-white right-10 -bottom-48 px-4 py-7 flex flex-col gap-2 rounded">
              {sortOptions.map((item) => (
                <ul key={item.name}>
                  <li className="cursor-pointer">{item.name}</li>
                </ul>
              ))}
            </div>
          </>
        ) : (
          <BsChevronDown
            className="text-xs cursor-pointer"
            onClick={handleFiltro}
          />
        )}
        <BsFillFunnelFill
          className="ml-5 md:hidden cursor-pointer"
          onClick={handleSmDevicesFilter}
        />
        <BsFillGridFill className="ml-5" />
      </div>
      <hr className="w-[97%] m-auto" />
    </div>
  );
};

export default MulherTopFilters;
