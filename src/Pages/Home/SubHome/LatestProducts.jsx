import fio from "../../../assets/fio.jpg";
import anel from "../../../assets/anel.jpg";
import pulseira from "../../../assets/pulseira.jpg";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../Context/CategoriesProvider";
import { useContext } from "react";

const LatestProducts = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <>
      <h2 className="mb-12 text-center text-3xl  lg:text-4xl 2xl:text-6xl font-playfair">
        Ultimos Lançamentos
      </h2>

      <div className="grid gap-x-6 lg:grid-cols-3 font-playfair">
        <div className="mb-12 lg:mb-0">
          <div className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
            <Link to={"/produtos"}>
              <img
                src={fio}
                className="w-full  transition-all ease-in-out duration-300 hover:brightness-110"
              />
            </Link>
          </div>
          <h5 className="mb-4 text-xl ">Joia Cereja</h5>
          <p>Preço: 35€</p>
          <p className="text-neutral-500 dark:text-neutral-300">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>

        <div className="mb-12 lg:mb-0">
          <div className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
            <Link to={"/produtos"}>
              <img
                src={anel}
                className="w-full  transition-all ease-in-out duration-300 hover:brightness-110"
              />
            </Link>
          </div>

          <h5 className="mb-4 text-xl ">Joia Cereja</h5>
          <p>Preço: 35€</p>
          <p className="text-neutral-500 dark:text-neutral-300">
            Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
            orci, nec ornare metus semper sed. Integer volutpat ornare erat sit
            amet rutrum.
          </p>
        </div>

        <div className="mb-0">
          <div className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]">
            <Link to={"/produtos"}>
              <img
                src={pulseira}
                className="w-full  transition-all ease-in-out duration-300 hover:brightness-110"
              />
            </Link>
          </div>

          <h5 className="mb-4 text-xl ">Joia Cereja</h5>
          <p>Preço: 35€</p>
          <p className="text-neutral-500 dark:text-neutral-300">
            Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu,
            non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat
            feugiat. Donec.
          </p>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
