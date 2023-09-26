import { useState, useContext } from "react";
import SideBarMain from "./SideBarMain";
import HeaderComponent from "./HeaderComponent";
import SideBarFilters from "./SideBarFilters";
import ProductsComponent from "./ProductsComponent";
import { CategoriesContext } from "../../Context/CategoriesProvider";

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
    <div className="mt-60">
      <HeaderComponent />
      <SideBarMain filtroOpen={filtroOpen} handleFiltro={handleFiltro} />
      <div className="grid grid-cols-6 gap-5 justify-center items-center p-5">
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
