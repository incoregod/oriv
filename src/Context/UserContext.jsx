import { createContext, useState } from "react";
const ThemeContext = createContext();

const UserContextProvider = ({ children }) => {
  const values = {};
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { UserContextProvider, ThemeContext };
