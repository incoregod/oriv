import { useState, useContext } from "react";
import SideBarMain from "./SideBarMain";
import SideBarFilters from "./SideBarFilters";
import ProductsComponent from "./ProductsComponent";
import { CategoriesContext } from "../../Context/CategoriesProvider";

const sortOptions = [
  { name: "Mais Popular", href: "#", current: true },
  { name: "Melhor Avaliado", href: "#", current: false },
  { name: "Recente", href: "#", current: false },
  { name: "Preço: Crescente", href: "#", current: false },
  { name: "Preço: Decrescente", href: "#", current: false },
];

const SideBarM = () => {
  const [filtroOpen, setFiltroOpen] = useState(false);
  const [sideFilterOpen, setSideFilterOpen] = useState({
    color: false,
    price: false,
    size: false,
  });
  const { categorias, produtos } = useContext(CategoriesContext);

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
      <SideBarMain
        filtroOpen={filtroOpen}
        handleFiltro={handleFiltro}
        sortOptions={sortOptions}
      />
      <div className="grid grid-cols-6 gap-5 lg:gap-12 justify-center items-center p-5">
        <SideBarFilters
          handleSideFilters={handleSideFilters}
          sideFilterOpen={sideFilterOpen}
          categorias={categorias}
        />
        <ProductsComponent produtos={produtos} />
      </div>
    </div>
  );
};

export default SideBarM;
