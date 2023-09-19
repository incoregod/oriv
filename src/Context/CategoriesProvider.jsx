import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Firebase/Firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const result = await getCategoriesAndDocuments();
      setCategories(result);
    };
    getCategories();
  }, []);

  const values = { categories };
  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
