import { createContext, useState, useEffect } from "react";
import { client, urlFor } from "../../client";
export const CategoriesContext = createContext();

// {categoriesMap: {},}

export const CategoriesProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [produtosData, setProdutosData] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const query =
      '*[_type == "produtos"] {title, imgUrl, tags,description,price, "Categoria": categoria->categoria, _id}';

    client.fetch(query).then((data) => setProdutosData(data));
  }, []);

  useEffect(() => {
    const query = '*[_type == "categorias"]';
    client.fetch(query).then((data) => setCategoriesData(data));
  }, []);

  useEffect(() => {
    categoriasSet();
  }, [categoriesData]);

  function categoriasSet() {
    const result = categoriesData.map((item) => item);
    setCategorias(result);
  }

  useEffect(() => {
    produtosSet();
  }, [produtosData]);

  function produtosSet() {
    setProdutos(produtosData);
  }

  const values = { produtos, categorias };
  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
