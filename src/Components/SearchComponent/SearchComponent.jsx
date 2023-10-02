import { useState, useContext } from "react";
import { CategoriesContext } from "../../Context/CategoriesProvider";
import { urlFor } from "../../../client";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const [formValue, setFormValue] = useState("");
  const { produtos } = useContext(CategoriesContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleForm(e) {
    const { value } = e.target;
    setFormValue(value);

    if (value.length >= 2) {
      const filteredProducts = produtos.filter((product) =>
        product.title.toLowerCase().includes(formValue.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }

  return (
    <>
      <input
        className="p-1 focus:outline-none text-black absolute right-0 top-[3.3rem] md:top-[11.5rem] md:right-20 font-playfair w-40"
        type="text"
        placeholder="Procurar um produto..."
        value={formValue}
        onChange={handleForm}
      />
      {formValue && (
        <div className="mt-5 border p-2 absolute right-0 top-[4rem]  md:top-[11.5rem] md:right-20 w-40 flex flex-col gap-5 text-black bg-white font-playfair overflow-y-auto">
          {filteredProducts.map((item) => (
            <Link
              onClick={() => {
                setFilteredProducts([]), setFormValue("");
              }}
              key={item._id}
              to={`/colecoes/${item.colecao}/${item.title}`}
            >
              <div className="flex gap-2 items-center justify-start">
                <img
                  className="w-1/4"
                  src={urlFor(item.imgUrl)}
                  alt={item.title}
                />

                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchComponent;
