import ProductCard from "../Cards/ProductCard";
import { urlFor } from "../../../client";
import { Link } from "react-router-dom";
import scrollTopHook from "../../Hooks/scrollTopHook";
import { FilterContext } from "../../Context/FilterContextProvider";
import { useContext } from "react";
const ProductsComponent = ({ produtos, type, itemGroup }) => {
  const { activeFilter } = useContext(FilterContext);

  function handleDisplayEl(item) {
    if (item[type] === itemGroup) {
      if (activeFilter) {
        if (activeFilter === item.categorias) {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  return (
    <div
      className={`col-span-${
        type === "colecoes" ? 5 : 6
      } grid grid-cols-1   sm:grid-cols-2  max-md:col-span-full lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center`}
    >
      {produtos.map(
        (item) =>
          handleDisplayEl(item) && (
            <ProductCard key={item._id}>
              <Link
                to={`/${type}/${itemGroup}/${item.title}`}
                onClick={scrollTopHook}
              >
                <img
                  className="object-cover h-80 w-full  "
                  src={urlFor(item.imgUrl)}
                  alt={item.title}
                />
              </Link>
              <div className="pt-2 font-playfair flex flex-col gap-1">
                <div className="flex  ">
                  <p className="text-xs border px-2 py-1 cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300 mr-1">
                    {item.categorias}
                  </p>
                </div>
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-lg px-2">€ {item.price}</p>
              </div>
            </ProductCard>
          )
      )}
    </div>
  );
};

export default ProductsComponent;
