import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const [product] = useState(
    localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : undefined
  );
  const { title, category, description, price, images, rating, comments } =
    product;

  return (
    <div className="main bg-transparent">
      <button className="btn btn-success">
        <NavLink
          className="nav-link fa fa-arrow-circle-o-left"
          exact
          to="/products"
        >
          {" "}
          Shop
        </NavLink>
      </button>

      <div className="card ms-2 mt-2">
        <img src={images} alt={title} className="card-img-top" />
        <div className="card-body mr-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fw-bolder">Category: {category}</p>
          <p className="card-text fw-lighter">{description}</p>
          <p className="card-text">Price: {price}€</p>
          {rating && <p className="card-text">Rating: {rating}</p>}
          {comments && <p className="card-text">comments: {comments}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
