import Navbar from "./Components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Mulher from "./Pages/Mulher/Mulher";
import Sobre from "./Pages/Sobre/Sobre";
import Servicos from "./Pages/Servicos/Servicos";
import Guia from "./Pages/Guia/Guia";
import Contactos from "./Pages/Contactos/Contactos";
import Footer from "./Components/Footer/Footer";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ColectionsProduct from "./Components/ColectionsProduct/ColectionsProduct";
import ShoppingCartSide from "./Components/ShoppingCartSide/ShoppingCartSide";
import { useContext } from "react";
import { ShoppingCartContext } from "./Context/ShoppingCartProvider";
function App() {
  const { isCartMenuOpen, handleSideMenu } = useContext(ShoppingCartContext);
  const element = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Mulher />,
      path: "/colecoes",
    },

    {
      element: <ProductDetail />,
      path: "/colecoes/:colecao/:productName",
    },
    {
      element: <ColectionsProduct />,
      path: "/colecoes/:colecao",
    },
    {
      element: <ColectionsProduct />,
      path: "/categorias/:categoria",
    },
    {
      element: <Sobre />,
      path: "/sobre",
    },
    {
      element: <Servicos />,
      path: "/servicos",
    },
    {
      element: <Guia />,
      path: "/guia",
    },
    {
      element: <Contactos />,
      path: "/contactos",
    },
  ]);
  return (
    <>
      <Navbar />
      <div>{element}</div>

      {isCartMenuOpen && (
        <div
          onClick={handleSideMenu}
          className="bg-gray-50  bg-opacity-50 w-screen h-screen fixed top-0 z-50"
        ></div>
      )}
      {isCartMenuOpen && <ShoppingCartSide handleSideMenu={handleSideMenu} />}
      <Footer />
    </>
  );
}

export default App;
