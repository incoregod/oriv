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

const filters = [
  {
    id: "color",
    name: "Cor",
    options: [
      { value: "white", label: "Branco", checked: false },
      { value: "blue", label: "Azul", checked: true },
      { value: "brown", label: "Castanho", checked: false },
      { value: "green", label: "Verde", checked: false },
    ],
  },
  {
    id: "price",
    name: "Preço",
    options: [
      { value: "25", label: "€25-50", checked: false },
      { value: "50", label: "€50-99", checked: false },
      { value: "100", label: "€100-149", checked: false },
      { value: "150", label: "€150-249", checked: false },
    ],
  },
  {
    id: "size",
    name: "Tamanho",
    options: [
      { value: "15cm", label: "15 cm", checked: false },
      { value: "16cm", label: "16 cm", checked: false },
      { value: "17cm", label: "17 cm", checked: false },
    ],
  },
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
