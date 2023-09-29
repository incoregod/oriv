import SideBarComponent from "../SideBarComponent/SideBarComponent";
import { FaTimes } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";

import { useMediaQuery } from "react-responsive";
import Buttons from "../Buttons/Buttons";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";
import { useContext } from "react";
import { urlFor } from "../../../client";
import { PiShoppingBagOpenThin } from "react-icons/pi";

const ShoppingCartSide = ({ handleSideMenu }) => {
  const options = Array.from({ length: 10 }, (_, index) => index + 1);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 405px)" });
  const { cartProducts, addItemToCart, cartValue, removeItemFromCart } =
    useContext(ShoppingCartContext);

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
        {cartProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-end ">
            <PiShoppingBagOpenThin
              className={`text-gray-300 text-[5rem] text-center  ${
                isTabletOrMobile ? "w-40" : "w-80"
              } mt-52`}
            />
            <h1 className="text-xl">O seu carrinho está vazio!</h1>
          </div>
        ) : (
          <>
            {cartProducts.map((produto) => {
              return (
                <div key={produto.produto._id} className="mb-2">
                  <div
                    className={`grid ${
                      isTabletOrMobile ? "grid-cols-3" : "grid-cols-5"
                    }  gap-2 justify-items-center`}
                  >
                    <img
                      className="object-cover col-span-2  h-44"
                      src={urlFor(produto.produto.imgUrl)}
                      alt="imagem"
                    />

                    <div className="flex flex-col col-span-2 ">
                      <p className="text-lg font-semibold">
                        {produto.produto.title}{" "}
                      </p>
                      {produto.produto.cor && <p>Cor produto</p>}
                      {produto.produto.size && <p>Tamanho: x</p>}
                      <select
                        className="border w-16 h-12  border-gray-300 text-xl text-center text-gray-500"
                        id="qtd"
                        name="qtd"
                        value={produto.qtd}
                        onChange={(e) =>
                          addItemToCart(produto.produto, e.target.value)
                        }
                      >
                        {options.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                      <p className="text-xl font-semibold mt-3">
                        Preço {produto.produto.price * produto.qtd} €
                      </p>
                    </div>
                    <BsTrash3
                      className="cursor-pointer w-5 h-5"
                      onClick={removeItemFromCart}
                    />
                  </div>
                </div>
              );
            })}
            <hr className="mt-20" />
            <div className="flex justify-between text-xl font-semibold">
              <p>Total</p>
              <p>{cartValue} €</p>
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
          </>
        )}
      </div>
    </SideBarComponent>
  );
};

export default ShoppingCartSide;
