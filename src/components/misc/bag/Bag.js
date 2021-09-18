import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../../contexts/CartContext";

function Bag() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <button type="button" className="btn position-relative ms-0">
        <span className="position-absolute top-0 start-110 translate-middle badge rounded-pill bg-danger">
          {cart.products.length}
          <span className="visually-hidden">Products</span>
        </span>
        <NavLink
          className="nav-link fa fa-shopping-bag fa-fw text-muted"
          aria-hidden="true"
          exact
          to="/order"
        >
          {" "}
          Bag
        </NavLink>
      </button>
    </>
  );
}

export default Bag;
