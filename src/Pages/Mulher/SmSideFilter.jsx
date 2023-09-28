import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const SmSideFilter = ({ handleSmDevicesFilter, categorias, render }) => {
  return (
    <div className="flex flex-col bg-white h-screen w-60 fixed top-0 right-0 z-40  md:hidden overflow-y-auto py-12">
      <div className=" border-b w-full border-opacity-50 border-gray-400 h-15 p-5 ">
        <FaTimes
          onClick={handleSmDevicesFilter}
          className="text-lg  cursor-pointer"
        />
      </div>
      <div className="col-span-1  ">
        <ul className="p-5">
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
    </div>
  );
};

export default SmSideFilter;
