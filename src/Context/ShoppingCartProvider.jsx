import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  function handleSideMenu() {
    setIsCartMenuOpen((prevVal) => !prevVal);
  }

  const values = {
    isCartMenuOpen,
    handleSideMenu,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
