import Navbar from "./Components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Colecoes from "./Pages/Colecoes/Colecoes";
import Mulher from "./Pages/Mulher/Mulher";
import Sobre from "./Pages/Sobre/Sobre";
import Servicos from "./Pages/Servicos/Servicos";
import Guia from "./Pages/Guia/Guia";
import Contactos from "./Pages/Contactos/Contactos";
import Footer from "./Components/Footer/Footer";
function App() {
  const element = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Colecoes />,
      path: "/colecoes",
    },
    {
      element: <Mulher />,
      path: "/mulher",
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
