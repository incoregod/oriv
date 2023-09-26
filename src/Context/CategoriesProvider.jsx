import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../../client";
export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const produtosQuery =
          '*[_type == "produtos"] {title, imgUrl, tags,description,price, "Categoria": categoria->categoria, _id}';
        const categoriasQuery = '*[_type == "categorias"]';

        const [produtos, categorias] = await Promise.all([
          client.fetch(produtosQuery),
          client.fetch(categoriasQuery),
        ]);
        setCategoriesData(categorias);
        setProdutos(produtos);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const categoriasSet = useCallback(() => {
    const result = categoriesData.map((item) => item);
    setCategorias(result);
  }, [categoriesData]);

  useEffect(() => {
    categoriasSet();
  }, [categoriasSet]);

  const values = { produtos, categorias };
  return (
    <CategoriesContext.Provider value={values}>
      {isLoading ? <div></div> : children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
