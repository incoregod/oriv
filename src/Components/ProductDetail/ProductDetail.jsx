import { Link, useParams } from "react-router-dom";
import Rating from "../Ratings/Ratings";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { useContext } from "react";
import { CategoriesContext } from "../../Context/CategoriesProvider";
import { urlFor } from "../../../client";
import Icons from "../Icons/Icons";
const ProductDetail = () => {
  const { productId } = useParams();
  const { produtos } = useContext(CategoriesContext);

  const myElement = produtos.map((produto) => {
    if (productId === produto._id) {
      return (
        <div key={produto._id} className=" mb-36">
          <div className="grid grid-cols-2 items-start justify-center p-20 gap-16">
            <div>
              <img
                className="w-[60rem] h-[40rem] object-cover mb-5"
                src={urlFor(produto.imgUrl)}
                alt="imagem"
              />
              <div className="grid grid-cols-4 gap-5 ">
                <img src={urlFor(produto.imgUrl)} alt={produto.title} />
                <img src={urlFor(produto.imgUrl)} alt={produto.title} />
                <img src={urlFor(produto.imgUrl)} alt={produto.title} />
                <img src={urlFor(produto.imgUrl)} alt={produto.title} />
              </div>
            </div>
            <div className="font-playfair flex flex-col gap-5">
              <h1 className="text-7xl">{produto.title} </h1>
              <hr />
              <p className="text-5xl">€ {produto.price}</p>

              <div className="flex gap-2 items-center">
                <Rating />
                <p>117 reviews</p>
              </div>

              <p className="text-2xl">{produto.description} </p>
              <div>
                <p className="font-semibold">Highlights</p>
                <ul className="list-disc pt-0 p-5">
                  <li>Hand cut and sewn locally</li>
                  <li>Dyed with our proprietary colors</li>
                  <li>Pre-washed & pre-shrunk</li>
                  <li>Ultra-soft 100% cotton</li>
                </ul>
                <p className="font-semibold">Detalhes</p>
                <p>
                  Details The 6-Pack includes two black, two white, and two
                  heather gray Basic Tees. Sign up for our subscription service
                  and be the first to get new, exciting colors, like our
                  upcoming "Charcoal Gray" limited release.
                </p>
              </div>
              {produto.Categoria === "Anéis" && (
                <div>
                  <p>Tamanhos</p>
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
                <button className="border py-4 px-6 bg-black text-white hover:text-black hover:bg-white transition-all ease-in-out duration-300  ">
                  Adicionar ao carrinho
                </button>
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
        </div>
      );
    }
  });

  console.log("name", productId);
  return (
    <>
      <div className="bg-gradient-to-b from-white via-gray-400  to-gray-50 top-0 h-80"></div>
      {myElement}
    </>
  );
};

export default ProductDetail;
