import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartValue, setCartValue] = useState(0);

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
      const existingProduct = prev.find(
        (item) => item.produto._id === produto._id
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.produto._id === produto._id
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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  }, [cartProducts]);

  console.log(cartProducts);

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

  function handleSideMenu() {
    setIsCartMenuOpen((prevVal) => !prevVal);
  }

  const values = {
    isCartMenuOpen,
    handleSideMenu,
    addItemToCart,
    cartProducts,
    cartValue,
    removeItemFromCart,
  };
  return (
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
