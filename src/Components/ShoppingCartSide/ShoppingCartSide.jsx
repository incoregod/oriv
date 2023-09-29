import SideBarComponent from "../SideBarComponent/SideBarComponent";
import { FaTimes } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import imagem from "../../assets/anel.jpg";
import { useMediaQuery } from "react-responsive";
import Buttons from "../Buttons/Buttons";
const ShoppingCartSide = ({ handleSideMenu }) => {
  const options = Array.from({ length: 10 }, (_, index) => index + 1);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 405px)" });

  return (
    <SideBarComponent
      position={{ top: "top-0", side: "right-0" }}
      type={"all devices"}
      width={`${isTabletOrMobile ? "w-64" : "w-96"}`}
    >
      <div className=" border-b w-full border-opacity-50 border-gray-400 h-15 p-5 ">
        <FaTimes onClick={handleSideMenu} className="text-lg  cursor-pointer" />
      </div>

      <div className="px-5 font-playfair">
        <h1 className="mb-8 text-2xl">CARRINHO</h1>
        <div className="">
          <div
            className={`grid ${
              isTabletOrMobile ? "grid-cols-3" : "grid-cols-5"
            }  gap-2 justify-items-center`}
          >
            <img
              className="object-cover col-span-2  h-44"
              src={imagem}
              alt="imagem"
            />

            <div className="flex flex-col col-span-2 ">
              <p className="text-lg font-semibold">Nome do produto</p>
              <p>Cor produto</p>
              <p>Tamanho: x</p>
              <select
                className="border w-16 h-12  border-gray-300 text-xl text-center text-gray-500"
                id="cars"
                name="cars"
              >
                {options.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <p className="text-xl font-semibold mt-3">Preço €</p>
            </div>
            <BsTrash3 className="cursor-pointer w-5 h-5" />
          </div>

          {/* Preciso validar estas entradas e apenas renderizar se tiver checked */}

          <hr className="mt-20" />
          <div className="flex justify-between text-xl font-semibold">
            <p>Total</p>
            <p>120€</p>
          </div>
          <div className="flex justify-center mt-5">
            <Buttons
              bgColor={"bg-black"}
              textColor={"text-white"}
              styles={"hover:text-black hover:bg-white"}
            >
              IR PARA O CHECKOUT
            </Buttons>
          </div>
        </div>
      </div>
    </SideBarComponent>
  );
};

export default ShoppingCartSide;
