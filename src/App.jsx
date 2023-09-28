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
function App() {
  const element = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Mulher />,
      path: "/mulher",
    },
    {
      element: <ProductDetail />,
      path: "/mulher/:colecao/:productName",
    },
    {
      element: <ColectionsProduct />,
      path: "/mulher/:colecao",
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
      <Footer />
    </>
  );
}

export default App;
