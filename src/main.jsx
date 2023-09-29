import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import CategoriesProvider from "./Context/CategoriesProvider.jsx";
import ShoppingCartProvider from "./Context/ShoppingCartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ParallaxProvider>
    <BrowserRouter>
      <CategoriesProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </ParallaxProvider>
  // </React.StrictMode>
);
