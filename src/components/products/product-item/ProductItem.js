import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { ProductContext } from "../../../contexts/ProductContext";
import "./ProductItem.css";

function ProductItem({
  title,
  category,
  description,
  price,
  images,
  rating,
  comments,
  id,
}) {
  const productContext = useContext(ProductContext);
  const { detail, productDetail } = productContext;
  const { createProduct } = useContext(CartContext);
  const [product] = useState({
    title: title,
    category: category,
    description: description,
    price: price,
    images: images,
    rating: rating,
    comments: comments,
    id: id
  });

  //para crear la cesta!!
  const handleCreateProduct = () => {
    createProduct({
      title,
      category,
      description,
      price,
      images,
      rating,
      comments,
      id,
      quantity: 1,
    });
  };

  const handleDetailProduct = () => {
    productDetail(product);
    detail(id)
  };

  return (
    <div className="ProductItem card mt-2">
      <img src={images} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: {price}€</p>
        {rating && <p className="card-text">Rating: {rating}</p>}
        {comments && <p className="card-text">comments: {comments}</p>}
        <NavLink
          exact
          to="/detail"
          className="btn btn-primary"
          onClick={handleDetailProduct}
        >
          More details
        </NavLink>
        <button
          className="btn btn-success fa fa-shopping-bag m-3"
          onClick={handleCreateProduct}
        ></button>
      </div>
    </div>
  );
}

export default ProductItem;
