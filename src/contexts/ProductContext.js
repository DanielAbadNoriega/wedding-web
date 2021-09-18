import productService from "../services/products-service";
import React, { useState } from "react";
import { useHistory } from "react-router";

export const ProductContext = React.createContext();

export function ProductContextProvider({ children }) {
  const history = useHistory();
  const [product, setProduct] = useState(
    localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : undefined
  );

  function productDetail(product) {
    localStorage.setItem("product", JSON.stringify(product));
    setProduct(product);
  }

  function detail(productId) {
    productService
      .detail(productId)
      .then(() => {
      })
      .catch(() => {
        history.push("/products");
      });
  }

  const value = {
    detail,
    productDetail,
    product,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
