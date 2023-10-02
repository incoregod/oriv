import model from "../../../assets/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.webp";
import { useContext } from "react";
import { CategoriesContext } from "../../../Context/CategoriesProvider";
import { urlFor } from "../../../../client";
import { Link } from "react-router-dom";
import scrollTopHook from "../../../Hooks/scrollTopHook";
import { Parallax } from "react-scroll-parallax";
const TopProducts = () => {
  const { produtos } = useContext(CategoriesContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const element = produtos.map((produto) => {
    if (!produto.tags) {
      return;
    }
    if (produto.tags.includes("Tendências")) {
      return (
        <div
          className="flex flex-col text-sm text-center  lg:text-xl"
          key={produto._id}
        >
          <div className="max-h-full">
            <Link
              to={`/colecoes/${produto.colecoes}/${produto.title}`}
              aria-label="Link to Produto"
              onClick={scrollTopHook}
            >
              <Parallax opacity={[0, 3, "ease"]}>
                <img
                  className="h-full w-full  object-cover   grayscale-[70%] hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer "
                  src={urlFor(produto.imgUrl)}
                  alt={produto.title}
                />
              </Parallax>
            </Link>
          </div>

          <div className="p-2 lg:p-5">
            <p>{produto.title} </p>
            <p>{produto.price} €</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="grid grid-cols-2 gap-5 items-center font-playfair  ">
      <div className="grid grid-rows-1  gap-4 gap-y-2  md:grid-cols-2   ">
        <h1 className="col-span-1 md:col-span-2 text-center  text-3xl lg:text-4xl 2xl:text-6xl lg:mb-10">
          Nova Época & Tendências
        </h1>
        {element}
      </div>
      <div className="h-full">
        <img className="h-full w-full object-cover " src={model} alt="modelo" />
      </div>
    </div>
  );
};

export default TopProducts;
