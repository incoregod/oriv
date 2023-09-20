import { Link } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../../Context/CategoriesProvider";
import { urlFor } from "../../../../client";
const LatestProducts = () => {
  const { produtos } = useContext(CategoriesContext);

  const element = produtos.map((item) => {
    if (!item.tags) return;
    if (item.tags.includes("recentes")) {
      return (
        <div key={item._id} className="mb-12 lg:mb-0">
          <div className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
            <Link to={"/produtos"}>
              <img
                src={urlFor(item.imgUrl)}
                className="w-full  transition-all ease-in-out duration-300 hover:brightness-110"
              />
            </Link>
          </div>
          <h5 className="mb-4 text-xl "> {item.title} </h5>
          <p>Preço: {item.price} €</p>
          <p className="text-neutral-500 dark:text-neutral-300">
            {item.description}
          </p>
        </div>
      );
    }
  });
  return (
    <>
      <h2 className="mb-12 text-center text-3xl  lg:text-4xl 2xl:text-6xl font-playfair">
        Ultimos Lançamentos
      </h2>

      <div className="grid gap-x-6 lg:grid-cols-3 font-playfair">{element}</div>
    </>
  );
};

export default LatestProducts;
