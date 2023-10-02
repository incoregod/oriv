import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState("");

  function handleActiveFilter(filter) {
    setActiveFilter(filter);
  }

  function removeActiveFilter() {
    setActiveFilter("");
  }

  const values = { handleActiveFilter, activeFilter, removeActiveFilter };
  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
