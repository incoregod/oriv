import { useParams } from "react-router-dom";
import SideBar from "../../Pages/Mulher/SideBar";
import HeaderComponent from "../../Pages/Mulher/HeaderComponent";
import FilterContextProvider from "../../Context/FilterContextProvider";
const ColectionsProduct = () => {
  const { colecao, categoria } = useParams();
  const itemGroup = colecao ? colecao : categoria;

  return (
    <div>
      <HeaderComponent />
      <FilterContextProvider>
        <SideBar
          itemGroup={itemGroup}
          type={colecao ? "colecoes" : "categorias"}
        />
      </FilterContextProvider>
    </div>
  );
};

export default ColectionsProduct;
