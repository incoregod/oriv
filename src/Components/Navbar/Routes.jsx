import { Link } from "react-router-dom";

const Routes = ({ type }) => {
  const routes = [
    "colecoes",
    "mulher",
    "sobre",
    "servicos",
    "guia",
    "contactos",
  ];
  function capitalizeFirstLetter(str) {
    if (str === "colecoes") {
      return "Coleções";
    } else if (str === "servicos") {
      return "Serviços";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const routesEl = routes.map((route) => (
    <Link
      key={route}
      to={`/${route}`}
      aria-label={route}
      className={
        type &&
        "border-b w-full border-opacity-50 border-gray-400 h-15 pt-0 p-5 "
      }
    >
      {capitalizeFirstLetter(route)}
    </Link>
  ));
  return <>{routesEl}</>;
};

export default Routes;
