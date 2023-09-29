import { useContext } from "react";
import { CategoriesContext } from "../../Context/CategoriesProvider";
import { urlFor } from "../../../client";
import { Link } from "react-router-dom";
const Collections = () => {
  const { colecoes } = useContext(CategoriesContext);

  const renderEl = colecoes.map((col) => (
    <div
      key={col.colecao}
      className="border pt-0 pb-5 px-0  lg:p-10 font-playfair grid grid-cols-1 lg:grid-cols-2 gap-5"
    >
      <img
        className="object-cover"
        src={urlFor(col.imgUrl)}
        alt={col.colecao}
      />
      <div className="flex flex-col  items-center justify-center gap-5">
        <h1 className="text-3xl text-center">Coleção {col.colecao} </h1>
        <Link
          className="border py-2 px-4 bg-black text-white hover:text-black hover:bg-white transition-all ease-in-out duration-300  "
          to={`/colecoes/${col.colecao}`}
          aria-label={`Link para ${col.colecao}`}
        >
          Ver mais
        </Link>
      </div>
    </div>
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-16">{renderEl}</div>
  );
};

export default Collections;
