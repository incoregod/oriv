import { BsPlus, BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
const SideBarFilters = ({ handleSideFilters, sideFilterOpen, categorias }) => {
  return (
    <div className="col-span-1 h-full hidden md:block">
      <ul className="py-5">
        {categorias.map((category) => (
          <li key={category.categoria}>
            <Link
              to={`/${category.categoria}`}
              className="cursor-pointer block px-2 py-3"
            >
              {category.categoria}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <div
        className="flex items-center justify-between cursor-pointer py-5"
        onClick={() => handleSideFilters("color")}
      >
        <p>Cor</p>
        {sideFilterOpen.color ? <BsDash /> : <BsPlus />}
      </div>
      {sideFilterOpen.color && (
        <div className="flex gap-2 p-2">
          <input type="checkbox" />
          <label>Branco</label>
        </div>
      )}
      <hr />
      <div
        className="flex items-center justify-between cursor-pointer py-5"
        onClick={() => handleSideFilters("price")}
      >
        <p>Preço</p>
        {sideFilterOpen.price ? <BsDash /> : <BsPlus />}
      </div>
      {sideFilterOpen.price && (
        <div className="flex gap-2 p-2">
          <input type="checkbox" />
          <label>€ 25-35</label>
        </div>
      )}
      <hr />
      <div
        className="flex items-center justify-between cursor-pointer py-5"
        onClick={() => handleSideFilters("size")}
      >
        <p>Tamanho</p>
        {sideFilterOpen.size ? <BsDash /> : <BsPlus />}
      </div>
      {sideFilterOpen.size && (
        <div className="flex flex-wrap">
          <div className="flex gap-2 p-2">
            <input type="checkbox" />
            <label>17 cm</label>
          </div>
          <div className="flex gap-2 p-2">
            <input type="checkbox" />
            <label>17 cm</label>
          </div>
          <div className="flex gap-2 p-2">
            <input type="checkbox" />
            <label>17 cm</label>
          </div>
          <div className="flex gap-2 p-2">
            <input type="checkbox" />
            <label>17 cm</label>
          </div>
          <div className="flex gap-2 p-2">
            <input type="checkbox" />
            <label>17 cm</label>
          </div>
          <div className="flex gap-2 p-2">
            <input type="checkbox" />
            <label>17 cm</label>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default SideBarFilters;
