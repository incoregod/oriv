import { useParams } from "react-router-dom";
import SideBar from "../../Pages/Mulher/SideBar";
import HeaderComponent from "../../Pages/Mulher/HeaderComponent";
const ColectionsProduct = () => {
  const { colecao } = useParams();

  console.log(colecao);

  return (
    <div>
      <HeaderComponent />
      <SideBar colecao={colecao} />
    </div>
  );
};

export default ColectionsProduct;
