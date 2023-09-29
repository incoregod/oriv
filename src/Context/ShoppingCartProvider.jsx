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
            ? {
                ...item,
                qtd: quantity ? parseInt(quantity) : parseInt(item.qtd) + 1,
              }
            : item
        );
      } else {
        return [...prev, { produto, qtd: 1 }];
      }
    });
  }

  function removeItemFromCart(produto) {
    const indexToRemove = cartProducts.findIndex((prevProd) => {
      return produto._id === prevProd._id;
    });

    if (indexToRemove !== -1) {
      const updatedCart = [...cartProducts];
      updatedCart.splice(indexToRemove, 1);

      setCartProducts(updatedCart);

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
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
    removeItemFromCart,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
