import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [carValue, setCartValue] = useState(0);

  useEffect(() => {
    setCartValue(
      cartProducts.reduce((total, product) => {
        return (
          parseFloat(total) + parseFloat(product.produto.price * product.qtd)
        );
      }, 0)
    );
  }, [cartProducts]);

  function addItemToCart(produto, quantity) {
    setCartProducts((prev) => {
      const existingProduct = prev.find((item) => item.produto === produto);

      if (existingProduct) {
        return prev.map((item) =>
          item.produto === produto
            ? { ...item, qtd: quantity ? quantity : item.qtd + 1 }
            : item
        );
      } else {
        return [...prev, { produto, qtd: 1 }];
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function handleSideMenu() {
    setIsCartMenuOpen((prevVal) => !prevVal);
  }

  const values = {
    isCartMenuOpen,
    handleSideMenu,
    addItemToCart,
    cartProducts,
    carValue,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
