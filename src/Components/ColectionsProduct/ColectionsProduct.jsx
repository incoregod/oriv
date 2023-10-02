import { useParams } from "react-router-dom";
import SideBar from "../../Pages/Mulher/SideBar";
import HeaderComponent from "../../Pages/Mulher/HeaderComponent";
const ColectionsProduct = () => {
  const { colecao, categoria } = useParams();
  const itemGroup = colecao ? colecao : categoria;

  return (
    <div>
      <HeaderComponent />
      <SideBar
        itemGroup={itemGroup}
        type={colecao ? "colecoes" : "categorias"}
      />
    </div>
  );
};

export default ColectionsProduct;
