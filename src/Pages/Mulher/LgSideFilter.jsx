import { Link } from "react-router-dom";
const LgSideFilter = ({ handleSmDevicesFilter, categorias, render }) => {
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
      {render}
    </div>
  );
};

export default LgSideFilter;
