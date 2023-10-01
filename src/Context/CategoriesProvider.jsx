import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../../client";
export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [colectionsData, setColectionsData] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [colecoes, setColecoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const produtosQuery = `*[_type == "produtos"] {title, imgUrl, subImages, tags,description, details, highlights,price, "categorias": categoria->categoria,"colecoes": colecao->colecao, _id}`;
        const categoriasQuery = '*[_type == "categorias"]';
        const colecoesQuery = '*[_type == "colecoes"]';

        const [produtos, categorias, colecoes] = await Promise.all([
          client.fetch(produtosQuery),
          client.fetch(categoriasQuery),
          client.fetch(colecoesQuery),
        ]);

        setCategoriesData(categorias);
        setProdutos(produtos);
        setColectionsData(colecoes);
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

  const colectionsSet = useCallback(() => {
    const result = colectionsData.map((item) => item);
    setColecoes(result);
  }, [colectionsData]);

  useEffect(() => {
    categoriasSet();
  }, [categoriasSet]);

  useEffect(() => {
    colectionsSet();
  }, [colectionsSet]);

  const values = { produtos, categorias, colecoes };
  return (
    <CategoriesContext.Provider value={values}>
      {isLoading ? <div></div> : children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
