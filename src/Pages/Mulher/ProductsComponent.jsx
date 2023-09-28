import ProductCard from "../../Components/Cards/ProductCard";
import Ratings from "../../Components/Ratings/Ratings";
import { urlFor } from "../../../client";
import { Link } from "react-router-dom";
const ProductsComponent = ({ produtos }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  };
  return (
    <div className="col-span-5 grid grid-cols-1  sm:grid-cols-2  max-md:col-span-full lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center ">
      {produtos.map((item) => (
        <ProductCard key={item._id}>
          <Link to={`/mulher/${item._id}`} onClick={scrollToTop}>
            <img
              className="object-cover h-80 w-full  "
              src={urlFor(item.imgUrl)}
              alt={item.title}
            />
          </Link>
          <div className="pt-2 font-playfair flex flex-col gap-1">
            <div className="flex  ">
              <p className="text-xs border px-2 py-1 cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300 mr-1">
                {item.Categoria}
              </p>
              {item.tags &&
                item.tags.map(
                  (tag, index) =>
                    index < 2 && ( //Não mostrar + q 2 tags.
                      <p
                        key={tag + index}
                        className="text-xs border px-2 py-1 bg-gray-200 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 mr-[1px] "
                      >
                        {tag}
                      </p>
                    )
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
