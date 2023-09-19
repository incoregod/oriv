import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import CategoriesProvider from "./Context/CategoriesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
