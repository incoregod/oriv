import { Link, useParams } from "react-router-dom";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../Context/CategoriesProvider";
import { urlFor } from "../../../client";
import Icons from "../Icons/Icons";
import Buttons from "../Buttons/Buttons";
import { ShoppingCartContext } from "../../Context/ShoppingCartProvider";
const ProductDetail = () => {
  const { productName } = useParams();
  const { produtos } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(ShoppingCartContext);
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);

  function handleShowAddedToCart() {
    setIsProductAddedToCart(true);
    setTimeout(() => {
      setIsProductAddedToCart(false);
    }, 2000);
  }

  const myElement = produtos.map((produto) => {
    if (productName === produto.title) {
      return (
        <div key={produto._id} className=" mb-36">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center p-5 xl:p-20 gap-16">
            <div>
              <img
                className="w-[60rem] h-[40rem] object-cover mb-5"
                src={urlFor(produto.imgUrl)}
                alt="imagem"
              />
              {produto.subImages && (
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 ">
                  {produto.subImages.map(
                    (imagem, index) =>
                      index < 4 && ( //max 4 imgs
                        <img
                          key={imagem + index}
                          src={urlFor(imagem)}
                          alt={produto.title}
                        />
                      )
                  )}
                </div>
              )}
            </div>
            <div className="font-playfair flex flex-col gap-5">
              <h1 className="text-7xl">{produto.title} </h1>
              <hr />
              <p className="text-5xl">€ {produto.price}</p>
              <p className="text-2xl">{produto.description} </p>

              <div>
                {produto.highlights && (
                  <div>
                    <p className="font-semibold text-gray-600">Highlights</p>
                    <ul className="list-disc  pt-0 p-5 marker:text-gray-200">
                      {produto.highlights.map((item, index) => (
                        <li key={item + index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {produto.detail && (
                  <div>
                    <p className="font-semibold text-gray-600">Detalhes</p>
                    <p>{produto.detail}</p>
                  </div>
                )}
              </div>
              {produto.Categoria === "Anéis" && (
                <div>
                  <p className="font-semibold text-gray-600">Tamanhos</p>
                  <div className="flex flex-wrap gap-5 items-center justify-start">
                    <div className="flex gap-1 items-center justify-center">
                      <input type="checkBox" />
                      <label>15cm</label>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      <input type="checkBox" />
                      <label>15cm</label>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      <input type="checkBox" />
                      <label>15cm</label>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      <input type="checkBox" />
                      <label>15cm</label>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      <input type="checkBox" />
                      <label>15cm</label>
                    </div>
                  </div>
                </div>
              )}
              {produto.Categoria === "Anéis" && (
                <div className="flex gap-1">
                  <Link to={"/guia"}>
                    <p className="text-xs">Consultar guia de tamanhos </p>
                  </Link>
                  <BsArrowUpRightSquare className="w-3 h-3" />
                </div>
              )}
              <div className="flex items-center gap-5 mt-5">
                <Buttons
                  bgColor={"bg-black"}
                  textColor={"text-white"}
                  styles={"hover:text-black hover:bg-white"}
                  onClick={() => {
                    addItemToCart(produto);
                    handleShowAddedToCart();
                  }}
                >
                  Adicionar ao carrinho
                </Buttons>
                <div className="border p-1 hover:scale-125 transition-all ease-in-out duration-300">
                  <Icons
                    icon={"heart"}
                    styles={
                      "text-gray-400 w-5 h-5 transition-all ease-in-out duration-300 hover:fill-yellow-300 cursor-pointer"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fixed bottom-10 left-10 text-white bg-black p-5 font-bold border-[1px] border-green-200  ${
              isProductAddedToCart ? "inline-block" : "hidden"
            }`}
          >
            Item Adicionado ao Carrinho
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div className="bg-gradient-to-b from-white via-gray-400  to-gray-50 top-0 h-20 md:h-80  "></div>
      {myElement}
    </>
  );
};

export default ProductDetail;
