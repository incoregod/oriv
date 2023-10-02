import { useContext } from "react";
import { FilterContext } from "../../Context/FilterContextProvider";

const SideFilterCategories = ({ categorias }) => {
  const { handleActiveFilter, activeFilter, removeActiveFilter } =
    useContext(FilterContext);
  return (
    <>
      <ul className="py-5">
        {categorias.map((category) => (
          <li
            key={category.categoria}
            className={`cursor-pointer block px-2 py-3 ${
              activeFilter === category.categoria &&
              "underline-offset-2 underline font-bold"
            }`}
            onClick={() => handleActiveFilter(category.categoria)}
          >
            {category.categoria}
          </li>
        ))}
      </ul>
      {activeFilter && (
        <button className="border p-2 mb-5" onClick={removeActiveFilter}>
          Remover Filtro
        </button>
      )}
    </>
  );
};

export default SideFilterCategories;
