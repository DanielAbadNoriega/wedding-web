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
  const { createCart } = useContext(CartContext);
  const [product] = useState({
    title: title,
    category: category,
    description: description,
    price: price,
    images: images,
    rating: rating,
    comments: comments,
    id: id,
  });

  //para crear la cesta!!
  const handleCreateCart = () => {
    createCart({
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
    detail(id);
  };

  return (
      <div className="ProductItem col-5 card border-light ms-3 mb-3 mt-2">
        <div className="row g-0">
          <div className="card-header bg-transparent border-light col-md-4">
            <img src={images} alt={title} className="card-img-top" />
          </div>
        </div>

        <div className="col-md-8">
          <div className="card-body bg-transparent">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Price: {price}€</p>
            {rating && <p className="card-text">Rating: {rating}</p>}
            {comments && <p className="card-text">comments: {comments}</p>}
          </div>
        </div>

        <div className="card-footer bg-transparent border-light">
          {" "}
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
            onClick={handleCreateCart}
          ></button>
        </div>
      </div>
  );
}

export default ProductItem;
