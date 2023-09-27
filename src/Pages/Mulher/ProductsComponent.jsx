import ProductCard from "../../Components/Cards/ProductCard";
import Ratings from "../../Components/Ratings/Ratings";
import { urlFor } from "../../../client";
const ProductsComponent = ({ produtos }) => {
  return (
    <div className="col-span-5 grid grid-cols-1 md:grid-cols-2  max-md:col-span-full lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {produtos.map((item) => (
        <ProductCard key={item._id}>
          <img
            className="object-cover h-80 w-full rounded-t-lg "
            src={urlFor(item.imgUrl)}
            alt={item.title}
          />
          <div className="p-2 font-playfair flex flex-col gap-1">
            <div className="flex gap-5">
              <p className="text-xs border px-2 py-1 cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300">
                {item.Categoria}
              </p>
              {item.tags && (
                <p className="text-xs border px-2 py-1 bg-gray-200 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
                  {item.tags}
                </p>
              )}
            </div>
            <h1 className="text-xl">{item.title}</h1>
            <Ratings />
            <p className="text-lg px-2">€ {item.price}</p>
          </div>
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductsComponent;
