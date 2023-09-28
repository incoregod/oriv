import { useState, useContext } from "react";
import MulherTopFilters from "./MulherTopFilters";
import SideBarFilters from "./SideBarFilters";
import ProductsComponent from "../../Components/ProductsComponent/ProductsComponent";
import { CategoriesContext } from "../../Context/CategoriesProvider";

const sortOptions = [
  { name: "Mais Popular", href: "#", current: true },
  { name: "Melhor Avaliado", href: "#", current: false },
  { name: "Recente", href: "#", current: false },
  { name: "Preço: Crescente", href: "#", current: false },
  { name: "Preço: Decrescente", href: "#", current: false },
];

const SideBar = ({ colecao }) => {
  const [filtroOpen, setFiltroOpen] = useState(false);
  const [sideFilterOpen, setSideFilterOpen] = useState({
    color: false,
    price: false,
    size: false,
  });
  const [smDevicesFilterOpen, setSmDevicesFilterOpen] = useState(false);
  const { categorias, produtos } = useContext(CategoriesContext);

  function handleSmDevicesFilter() {
    setSmDevicesFilterOpen((prev) => !prev);
  }

  function handleSideFilters(type) {
    setSideFilterOpen((prev) => {
      return {
        ...prev,
        [type]: !prev[type],
      };
    });
  }

  function handleFiltro() {
    setFiltroOpen((prevState) => !prevState);
  }

  return (
    <div>
      <MulherTopFilters
        filtroOpen={filtroOpen}
        handleFiltro={handleFiltro}
        sortOptions={sortOptions}
        handleSmDevicesFilter={handleSmDevicesFilter}
      />
      <div className="grid grid-cols-6 gap-5 lg:gap-12 justify-center items-center p-5">
        <SideBarFilters
          handleSideFilters={handleSideFilters}
          sideFilterOpen={sideFilterOpen}
          categorias={categorias}
          smDevicesFilterOpen={smDevicesFilterOpen}
          handleSmDevicesFilter={handleSmDevicesFilter}
        />
        <ProductsComponent
          produtos={produtos}
          colecao={colecao}
          type={"mulher"}
        />
      </div>
    </div>
  );
};

export default SideBar;
